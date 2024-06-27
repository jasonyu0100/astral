import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { SpaceSessionUpdateForm } from './form/main';
import { SpaceSessionUpdateLeft } from './left/main';
import { SpaceSessionUpdateRight } from './right/main';

interface Controller {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  SessionUpdate: () => Promise<ChapterSessionUpdateObj>;
}

export const ContextForUpdateForm = createContext({} as Controller);

export function SpaceSessionUpdateMain() {
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );
  const currentItem =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);
  const [title, setTitle] = useState(currentItem.title);
  const [description, setDescription] = useState(currentItem.description);

  async function SessionUpdate() {
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

  const context = {
    title,
    setTitle,
    description,
    setDescription,
    SessionUpdate,
  };

  return (
    <ContextForUpdateForm.Provider value={context}>
      <div className='flex h-full w-full flex-row items-center justify-between'>
        <SpaceSessionUpdateLeft />
        <SpaceSessionUpdateForm />
        <SpaceSessionUpdateRight />
      </div>
    </ContextForUpdateForm.Provider>
  );
}
