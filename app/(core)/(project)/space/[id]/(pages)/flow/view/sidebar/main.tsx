import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForVerseCommentList } from '@/(server)/(controller)/space/chapter/verse/comment/list';
import { ContextForVerseCommentObj } from '@/(server)/(model)/space/chapter/verse/comment/main';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceFlowAddVerseCommentModal } from '../../(modal)/add/comment/main';
import { SpaceFlowSidebarAdd } from './add/main';
import { SpaceFlowSidebarEntry } from './entry/main';

export function SpaceFlowSidebar() {
  const commentListController = useContext(ContextForVerseCommentList);
  const openableController = useControllerForOpenable();
  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceFlowAddVerseCommentModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceFlowSidebar.name}
        sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full'
        className={`flex flex-col space-y-[1rem] p-[1rem] `}
        glassFx={glassFx['glass-5']}
        borderFx={borderFx['border-l']}
      >
        <div className='h-full w-full overflow-auto  pr-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            {commentListController.state.objs.map((obj) => (
              <ContextForVerseCommentObj.Provider value={obj} key={obj.id}>
                <SpaceFlowSidebarEntry key={obj.id} />
              </ContextForVerseCommentObj.Provider>
            ))}
            <SpaceFlowSidebarAdd onClick={openableController.open} />
          </div>
        </div>
      </GlassAreaContainer>
    </>
  );
}
