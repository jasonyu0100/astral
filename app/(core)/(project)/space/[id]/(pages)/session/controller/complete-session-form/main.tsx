import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForChapterSessionContributorList } from '@/(server)/controller/space/chapter/session/contributor/list';
import { ContextForChapterSessionList } from '@/(server)/controller/space/chapter/session/list';
import { ContextForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ChapterSessionObj } from '@/(server)/model/space/chapter/session/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { createContext, useContext, useState } from 'react';

interface Controller {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  saveUpdate: () => Promise<ChapterSessionObj>;
  percent: number;
  setPercent: (value: number) => void;
  contributorIds: string[];
  setContributorIds: (value: string[]) => void;
}

export const ContextForSessionForm = createContext({} as Controller);

export function useControllerForSessionForm() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const updateListController = useContext(ContextForChapterSessionList);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateListFromChapter,
  );
  const contributorListController =
    useControllerForChapterSessionContributorList('');
  const currentUpdate =
    sessionUpdateListController.state.currentObj || ({} as ChapterSessionObj);

  const [title, setTitle] = useState(currentUpdate.title);
  const [description, setDescription] = useState(currentUpdate.description);
  const [percent, setPercent] = useState(0);
  const [contributorIds, setContributorIds] = useState<string[]>([]);

  async function saveUpdate(): Promise<ChapterSessionObj> {
    const duration =
      (percent / 100) * (spaceController.state.obj.hours * 60 * 1000);
    const update =
      await updateListController.actions.createActions.createUpdate(
        loggedInUser.id,
        spaceController.state.objId,
        chapterListController.state.objId,
        title,
        description,
        duration,
      );
    await Promise.all(
      contributorIds.map((contributorId) => {
        return contributorListController.actions.createActions.createContributor(
          contributorId,
          sessionUpdateListController.state.objId,
        );
      }),
    );
    await sessionUpdateListController.state.objs.map(async (item) => {
      return sessionUpdateListController.actions.editActions.edit(item.id, {
        sessionId: update.id,
      });
    });
    return update;
  }

  return {
    title,
    setTitle,
    description,
    setDescription,
    percent,
    setPercent,
    saveUpdate,
    contributorIds,
    setContributorIds,
  };
}
