import { useGlobalUser } from '@/logic/store/user/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { useControllerForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceList } from '@/server/controller/space/list';
import { useControllerForSpaceMemberList } from '@/server/controller/space/member/list';
import { useControllerForTaskList } from '@/server/controller/way/list';
import {
  exampleFileElement,
  FileElement,
} from '@/server/model/elements/file/main';
import { SpaceObj } from '@/server/model/space/main';
import {
  SpaceTemplate,
  SpaceTemplateMap,
  TemplateChapterObj,
} from '@/templates/space/main';
import { createContext, useContext, useEffect, useState } from 'react';
export interface PageOne {
  title: string;
  updateTitle: (title: string) => void;
  thumbnail: FileElement;
  updateThumbnail: (thumbnail: FileElement) => void;
  description: string;
  updateDescription: (description: string) => void;
  category: SpaceTemplate;
  updateCategory: (category: SpaceTemplate) => void;
  memberIds: string[];
  updateMemberIds: (memberIds: string[]) => void;
}

export interface PageTwo {
  category: string;
  templateProjectChapters: TemplateChapterObj[];
  updateTemplateProjectChapters: (templates: TemplateChapterObj[]) => void;
}

export interface PageThree {
  memberIds: string[];
  updateMemberIds: (memberIds: string[]) => void;
}

export const ContextForPageOne = createContext({} as PageOne);
export const ContextForPageTwo = createContext({} as PageTwo);
export const ContextForPageThree = createContext({} as PageThree);

interface CreateSpaceController {
  pageOne: PageOne;
  pageTwo: PageTwo;
  pageThree: PageThree;
  createSpace: () => Promise<SpaceObj>;
}

export const ContextForCreateSpace = createContext({} as CreateSpaceController);

export const useControllerForCreateSpace = (): CreateSpaceController => {
  const user = useGlobalUser((state) => state.user);
  const spaceListController = useContext(ContextForSpaceList);
  const taskListController = useControllerForTaskList('');
  const chapterListController = useControllerForSpaceChapterList('');
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );
  const spaceMembersListController = useControllerForSpaceMemberList('');
  const [title, changeTitle] = useState('Tutorial space');
  const [description, changeDescription] = useState('Description for my space');
  const [category, changeCategory] = useState(SpaceTemplate.TutorialSpace);
  const [theme, changeTheme] = useState<FileElement>(exampleFileElement);
  const [memberIds, changeMemberIds] = useState<string[]>([]);
  const [templateSpaceChapters, changeTemplateSpaceChapters] = useState(
    SpaceTemplateMap[category].chapters,
  );

  async function createChapters(
    space: SpaceObj,
    templateSpaceChapters: TemplateChapterObj[],
  ) {
    const chapters = await Promise.all(
      templateSpaceChapters.map(async (templateChapter, index) => {
        const chapter =
          await chapterListController.actions.createActions.createChapter(
            templateChapter.title,
            templateChapter.description,
            templateChapter.objective,
            theme.src,
            user.id,
            space.id,
            index,
          );
        await activityListController.actions.createActions.createFromChapter(
          user.id,
          space.id,
          chapter.id,
        );
        return chapter;
      }),
    );

    return chapters;
  }

  async function createMembers(space: SpaceObj, members: string[]) {
    const memberObjs = await Promise.all(
      members.map(async (memberId) => {
        const member =
          await spaceMembersListController.actions.createActions.createMember(
            memberId,
            space.id,
          );
        return member;
      }),
    );
    return memberObjs;
  }

  async function createSpace() {
    const space =
      await spaceListController.actions.createActions.createFromTemplate(
        title,
        description,
        SpaceTemplateMap[category].objective,
        user.id,
        theme,
        category,
      );

    console.log('SPACE CREATED', space);
    const chapters = await createChapters(space, templateSpaceChapters);

    const tasks = await Promise.all(
      templateSpaceChapters.map((template, index) =>
        Promise.all(
          template.tasks.map((task) =>
            taskListController.actions.createActions.createTask(
              chapters[index].id,
              user.id,
              task.title,
              task.description,
            ),
          ),
        ),
      ),
    );
    console.log('TASKS CREATED', tasks);

    console.log('CHAPTERS CREATED', chapters);
    const members = await createMembers(space, memberIds);
    console.log('MEMBERS CREATED', members);
    return space;
  }

  useEffect(() => {
    changeTemplateSpaceChapters(SpaceTemplateMap[category].chapters);
  }, [category]);

  const pageOne: PageOne = {
    title,
    updateTitle: (title: string) => changeTitle(title),
    category,
    updateCategory: (category: SpaceTemplate) => changeCategory(category),
    thumbnail: theme,
    updateThumbnail: (thumbnail: FileElement) => changeTheme(thumbnail),
    description,
    updateDescription: (description: string) => changeDescription(description),
    memberIds: memberIds,
    updateMemberIds: (members: string[]) => changeMemberIds(members),
  };

  const pageTwo: PageTwo = {
    category: category,
    templateProjectChapters: templateSpaceChapters,
    updateTemplateProjectChapters: (templates: TemplateChapterObj[]) =>
      changeTemplateSpaceChapters(templates),
  };

  const pageThree: PageThree = {
    memberIds: memberIds,
    updateMemberIds: (members: string[]) => changeMemberIds(members),
  };

  return {
    pageOne,
    pageTwo,
    pageThree,
    createSpace,
  };
};
