import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForVerseCommentList } from '@/(server)/(controller)/space/chapter/verse/comment/list';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceFlowAddVerseCommentModal } from '../../(modal)/add/comment/main';
import { SpaceFlowSidebarComment } from './comment/main';

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
        sizeFx='w-[300px] h-full'
        className={`flex flex-col space-y-[1rem] p-[1rem] `}
        glassFx={glassFx['glass-5']}
        borderFx={borderFx['border-l']}
      >
        <div className='h-full w-full overflow-auto  pr-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            <p className='text-lg font-bold text-slate-500'>20 day ago</p>
            <SpaceFlowSidebarComment>
              <p className='text-xl font-bold text-slate-300'>Jason Yu</p>
              <p className='font-bold text-slate-500'>
                Could do with some work
              </p>
            </SpaceFlowSidebarComment>
            <SpaceFlowSidebarComment>
              <p className='text-xl font-bold text-slate-300'>Initial Work</p>
              <p className='font-bold text-slate-500'>Jun 15 to Jun 27</p>
            </SpaceFlowSidebarComment>
            <p className='text-lg font-bold text-slate-500'>20 day ago</p>
            <SpaceFlowSidebarComment>
              <p className='text-xl font-bold text-slate-300'>Initial Work</p>
              <p className='font-bold text-slate-500'>Jun 15 to Jun 27</p>
            </SpaceFlowSidebarComment>
            {/* {commentListController.state.objs.map((obj) => (
              <ContextForVerseCommentObj.Provider value={obj} key={obj.id}>
                <SpaceFlowSidebarEntry key={obj.id} />
              </ContextForVerseCommentObj.Provider>
            ))}
            <SpaceFlowSidebarAdd onClick={openableController.open} /> */}
          </div>
        </div>
      </GlassAreaContainer>
    </>
  );
}
