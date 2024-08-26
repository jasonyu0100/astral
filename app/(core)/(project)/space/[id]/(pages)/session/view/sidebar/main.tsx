import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceSessionAddUpdateModal } from '../../modal/add/update/main';

export function SpaceSessionSidebar() {
  const openableController = useControllerForOpenable();
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sessionListController = useContext(ContextForChapterSessionList);

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSessionAddUpdateModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceSessionSidebar.name}
        sizeFx='w-[300px] h-full'
        glassFx={glassFx['glass-5']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <div className='flex w-full flex-col items-center justify-center p-[1rem] shadow-glow'>
          <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
            <GlassWindowContents className='flex h-full w-full items-center'>
              <p
                className='cursor-pointer text-sm font-bold text-slate-500'
                onClick={() => {}}
              >
                Chapter One / Scene 1
              </p>
            </GlassWindowContents>
          </GlassWindowFrame>
          <GlassWindowFrame
            className='h-[3rem] w-full flex-shrink-0'
            roundedFx={roundedFx['rounded']}
          >
            <GlassWindowContents className='h-full w-full'>
              <input
                className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-300 outline-none'
                placeholder='Venture forth...'
              ></input>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        <div style={{ height: '100%', width: '100%' }}>
          <div className='flex flex-col space-y-[1rem] p-[1rem]'>
            <div className='flex flex-col space-y-[2rem]'>
              {ideaListController.state.objs.map((idea, index) => (
                <GlassWindowFrame>
                  <GlassWindowContents className='flex flex-row space-x-[1rem]'>
                    <div className='flex h-[1.5rem] w-[1.5rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                      <p className='text-center font-bold text-white'>
                        {index + 1}
                      </p>
                    </div>
                    <div
                      key={idea.id}
                      className='flex flex-col space-y-2 font-bold text-slate-300'
                    >
                      <div className='text-lg font-bold'>
                        {idea.title || 'Untitled'}
                      </div>
                      <div className='text-sm font-light'>
                        {idea.description || 'No description'}
                      </div>
                    </div>
                  </GlassWindowContents>
                </GlassWindowFrame>
              ))}
            </div>
          </div>
        </div>
      </GlassAreaContainer>
    </>
  );
}
