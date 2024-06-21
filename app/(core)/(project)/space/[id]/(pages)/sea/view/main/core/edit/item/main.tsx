import { VerticalDivider } from '@/(components)/(line)/divider/vertical/main';
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
import { SpaceSeaEditDone } from '../(common)/icon/done/main';
import { SpaceSeaEditNext } from '../(common)/icon/next/main';
import { SpaceSeaEditPrev } from '../(common)/icon/prev/main';
import { EditContext } from '../main';
import { SpaceSeaItemForm } from './form/main';

interface Controller {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  SessionUpdate: () => Promise<ChapterSessionUpdateObj>;
}

export const ContextForItemEdit = createContext({} as Controller);

export function SpaceSeaEditItemForm() {
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
    <ContextForItemEdit.Provider value={context}>
      <div className='flex h-full w-full flex-row items-center justify-between space-x-[4rem]'>
        {sessionUpdateListController.state.index > 0 && (
          <SpaceSeaEditPrev
            onClick={() => {
              if (sessionUpdateListController.state.index === 0) {
                chapterListController.actions.stateActions.goPrev();
              } else {
                sessionUpdateListController.actions.stateActions.goPrev();
              }
            }}
          />
        )}
        <VerticalDivider />
        <SpaceSeaItemForm />
        <VerticalDivider />
        {sessionUpdateListController.state.index !==
        sessionUpdateListController.state.objs.length - 1 ? (
          <SpaceSeaEditNext
            onClick={() => {
              sessionUpdateListController.actions.stateActions.goNext();
            }}
          />
        ) : (
          <SpaceSeaEditDone
            onClick={() => {
              updateComplete(true);
            }}
          />
        )}
      </div>
    </ContextForItemEdit.Provider>
  );
}
