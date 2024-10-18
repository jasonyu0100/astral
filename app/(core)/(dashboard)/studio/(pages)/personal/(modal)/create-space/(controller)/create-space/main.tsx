import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { useControllerForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { useControllerForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { useControllerForGalleryList } from '@/(server)/controller/gallery/list';
import { useControllerForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceList } from '@/(server)/controller/space/list';
import { useControllerForSpaceMemberList } from '@/(server)/controller/space/member/list';
import {
  exampleFileElem,
  exampleFileElems,
  FileElem,
} from '@/(server)/model/elements/file/main';
import { SpaceObj } from '@/(server)/model/space/main';
import {
  SpaceTemplate,
  SpaceTemplateMap,
  TemplateChapterObj,
} from '@/(server)/templates/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import moment from 'moment';
import { createContext, useContext, useEffect, useState } from 'react';
export interface PageOne {
  title: string;
  updateTitle: (title: string) => void;
  thumbnail: FileElem;
  updateThumbnail: (thumbnail: FileElem) => void;
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
  hours: number;
  updateHours: (hours: number) => void;
  target: string;
  updateTarget: (target: string) => void;
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
  const galleryListController = useControllerForGalleryList(user.id);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );
  const chapterListController = useControllerForSpaceChapterList('');
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );
  const spaceMembersListController = useControllerForSpaceMemberList('');
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [category, changeCategory] = useState(SpaceTemplate.StarterProject);
  const [theme, changeTheme] = useState(exampleFileElem as FileElem);
  const [hours, changeHours] = useState(10);
  const [target, changeTarget] = useState(
    moment(new Date()).add(1, 'week').toISOString(),
  );
  const [memberIds, changeMemberIds] = useState<string[]>([]);
  const [templateSpaceChapters, changeTemplateSpaceChapters] = useState(
    [] as TemplateChapterObj[],
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
            templateChapter.summary,
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
    const gallery =
      await galleryListController.actions.createActions.createGallery(
        user.id,
        `${title || 'Untitled'} Gallery`,
        'Gallery for space',
        theme,
      );
    console.log('GALLERY CREATED', gallery);

    const collection =
      await collectionListController.actions.createActions.createCollection(
        'Starter Collection',
        'Collection for starter spaces',
        gallery.id,
      );
    console.log('COLLECTION CREATED', collection);

    const starterResourecs = await Promise.all(
      exampleFileElems.map((fileElem) =>
        resourceListController.actions.createActions.createFromFile(
          user.id,
          collection.id,
          'Starter Resource',
          '',
          fileElem,
        ),
      ),
    );
    console.log('RESOURCES CREATED', starterResourecs);

    const space =
      await spaceListController.actions.createActions.createFromTemplate(
        title,
        description,
        SpaceTemplateMap[category].objective,
        user.id,
        theme,
        category,
        gallery.id,
        collection.id,
        hours,
        target,
      );

    console.log('SPACE CREATED', space);
    const chapters = await createChapters(space, templateSpaceChapters);
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
    updateThumbnail: (thumbnail: FileElem) => changeTheme(thumbnail),
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
    hours: hours,
    updateHours: (hours: number) => changeHours(hours),
    target: target,
    updateTarget: (target: string) => changeTarget(target),
  };

  return {
    pageOne,
    pageTwo,
    pageThree,
    createSpace,
  };
};
