import { ContextForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { ChapterSessionUpdateObj } from '@/(server)/model/space/chapter/session/update/main';
import { createContext, useContext, useState } from 'react';

interface Controller {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  updateSession: () => Promise<ChapterSessionUpdateObj>;
}

export const ContextForUpdateForm = createContext({} as Controller);

export function useControllerForUpdateForm(): Controller {
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );
  const currentItem =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);
  const [title, setTitle] = useState(currentItem.title);
  const [description, setDescription] = useState(currentItem.description);

  async function updateSession() {
    const update = await sessionUpdateListController.actions.editActions.edit(
      currentItem?.id,
      {
        title: title,
        description: description,
        added: true,
      },
    );
    return update;
  }

  return {
    title,
    setTitle,
    description,
    setDescription,
    updateSession,
  };
}
