import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { useControllerForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceList } from '@/(server)/controller/space/list';
import { useControllerForSpaceMemberList } from '@/(server)/controller/space/member/list';
import { useControllerForSpaceMemberTermsList } from '@/(server)/controller/space/member/terms/list';
import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
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
  thumbnail: FileElem;
  updateThumbnail: (thumbnail: FileElem) => void;
  memberIds: string[];
  updateMemberIds: (memberIds: string[]) => void;
  commitmentLevel: number;
  updateCommitmentLevel: (commitmentLevel: number) => void;
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
  const spaceListController = useContext(ContextForSpaceList);
  const galleryListController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const chapterListController = useControllerForSpaceChapterList('');
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );
  const spaceMembersListController = useControllerForSpaceMemberList('');
  const spaceMembersTermsListController =
    useControllerForSpaceMemberTermsList('');

  const user = useGlobalUser((state) => state.user);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [category, changeCategory] = useState(SpaceTemplate.StarterProject);
  const [thumbnail, changeThumbnail] = useState(exampleFileElem as FileElem);
  const [hours, changeHours] = useState(10);
  const [target, changeTarget] = useState(
    moment(new Date()).add(1, 'week').toISOString(),
  );
  const [commitmentLevel, setCommitmentLevel] = useState(1);
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
        const terms =
          await spaceMembersTermsListController.actions.createActions.createTerms(
            'Member terms',
            '1 year',
            moment().add(1, 'year').toISOString(),
          );
        const member =
          await spaceMembersListController.actions.createActions.createMember(
            memberId,
            space.id,
            terms.id,
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
        `Space - ${title}`,
        'Gallery for space',
        thumbnail,
      );
    console.log('GALLERY CREATED', gallery);

    const collection =
      await collectionListController.actions.createActions.createCollection(
        'Starter Collection',
        'Collection for starter spaces',
        gallery.id,
      );
    console.log('COLLECTION CREATED', collection);

    const space =
      await spaceListController.actions.createActions.createFromTemplate(
        title,
        description,
        SpaceTemplateMap[category].objective,
        user.id,
        thumbnail,
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
    thumbnail,
    updateThumbnail: (thumbnail: FileElem) => changeThumbnail(thumbnail),
    description,
    updateDescription: (description: string) => changeDescription(description),
  };

  const pageTwo: PageTwo = {
    category: category,
    templateProjectChapters: templateSpaceChapters,
    updateTemplateProjectChapters: (templates: TemplateChapterObj[]) =>
      changeTemplateSpaceChapters(templates),
  };

  const pageThree: PageThree = {
    commitmentLevel: commitmentLevel,
    memberIds: memberIds,
    updateMemberIds: (members: string[]) => changeMemberIds(members),
    hours: hours,
    updateHours: (hours: number) => changeHours(hours),
    target: target,
    updateTarget: (target: string) => changeTarget(target),
    thumbnail,
    updateThumbnail: (thumbnail: FileElem) => changeThumbnail(thumbnail),
    updateCommitmentLevel: (number: number) => setCommitmentLevel(number),
  };

  return {
    pageOne,
    pageTwo,
    pageThree,
    createSpace,
  };
};
