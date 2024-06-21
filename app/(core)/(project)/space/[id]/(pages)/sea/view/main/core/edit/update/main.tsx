import { VerticalDivider } from '@/(components)/(line)/divider/vertical/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ContextForSpaceMain } from '@/(server)/(controller)/space/main';
import { ChapterSessionObj } from '@/(server)/(model)/space/chapter/session/main';
import { createContext, useContext, useState } from 'react';
import { SpaceSeaEditPrev } from '../(common)/icon/prev/main';
import { EditContext } from '../main';
import { SpaceSeaUpdateForm } from './form/main';

interface Controller {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  saveUpdate: () => Promise<ChapterSessionObj>;
}

export const ContextForUpdateEdit = createContext({} as Controller);

export function SpaceSeaEditUpdateForm() {
  const { updateComplete } = useContext(EditContext);
  const user = useGlobalUser((state) => state.user);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const updateListController = useContext(ContextForChapterSessionList);
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );
  const currentUpdate =
    sessionUpdateListController.state.currentObj || ({} as ChapterSessionObj);
  const [title, setTitle] = useState(currentUpdate.title);
  const [description, setDescription] = useState(currentUpdate.description);

  async function saveUpdate(): Promise<ChapterSessionObj> {
    const update =
      await updateListController.actions.createActions.createUpdate(
        user.id,
        spaceController.state.objId,
        chapterListController.state.objId,
        title,
        description,
      );
    sessionUpdateListController.state.objs.map(async (item) => {
      return sessionUpdateListController.actions.editActions.edit(item.id, {
        sessionId: update.id,
      });
    });
    return update;
  }

  const context = {
    title,
    setTitle,
    description,
    setDescription,
    saveUpdate,
  };

  return (
    <ContextForUpdateEdit.Provider value={context}>
      <div className='flex h-full w-full flex-row items-center justify-between space-x-[4rem]'>
        <SpaceSeaEditPrev
          onClick={() => {
            updateComplete(false);
            if (sessionUpdateListController.state.index === 0) {
              chapterListController.actions.stateActions.goPrev();
            } else {
              sessionUpdateListController.actions.stateActions.goPrev();
            }
          }}
        />
        <VerticalDivider />
        <SpaceSeaUpdateForm />
        <VerticalDivider />
      </div>
    </ContextForUpdateEdit.Provider>
  );
}
