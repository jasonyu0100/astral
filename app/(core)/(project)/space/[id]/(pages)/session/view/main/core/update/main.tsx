import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { SpaceSessionEditDone } from '../(common)/icon/done/main';
import { SpaceSessionEditNext } from '../(common)/icon/next/main';
import { SpaceSessionEditPrev } from '../(common)/icon/prev/main';
import { EditContext } from '../main';
import { SpaceSessionUpdateForm } from './form/main';

interface Controller {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  SessionUpdate: () => Promise<ChapterSessionUpdateObj>;
}

export const ContextForUpdateForm = createContext({} as Controller);

export function SpaceSessionUpdateMain() {
  const { updateComplete } = useContext(EditContext);
  const chapterListController = useContext(ContextForSpaceChapterList);
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
        {sessionUpdateListController.state.index > 0 ? (
          <SpaceSessionEditPrev
            onClick={() => {
              if (sessionUpdateListController.state.index === 0) {
                chapterListController.actions.stateActions.goPrev();
              } else {
                sessionUpdateListController.actions.stateActions.goPrev();
              }
            }}
          />
        ) : (
          <div className='w-[3rem]'></div>
        )}
        <SpaceSessionUpdateForm />
        {sessionUpdateListController.state.index !==
        sessionUpdateListController.state.objs.length - 1 ? (
          <SpaceSessionEditNext
            onClick={() => {
              sessionUpdateListController.actions.stateActions.goNext();
            }}
          />
        ) : (
          <SpaceSessionEditDone
            onClick={() => {
              updateComplete(true);
            }}
          />
        )}
      </div>
    </ContextForUpdateForm.Provider>
  );
}
