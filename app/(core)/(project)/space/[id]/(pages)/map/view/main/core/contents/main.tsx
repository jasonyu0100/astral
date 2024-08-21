import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceMapAddSceneModal } from '../../../../(modal)/add/scene/main';
import { SpaceMapContentsScene } from './scene/main';

export function SpaceMapCoreContents() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const openableController = useControllerForOpenable();

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col'
    >
      <div className='w-full' style={{ height: '100%' }}>
        <SpaceMapContentsScene />
      </div>
      <div className='flex h-[180px] w-full flex-shrink-0 items-center justify-center p-[2rem]'>
        <GlassWindowFrame
          className='h-full w-full items-center justify-center p-[2rem]'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex flex-row items-center'>
            <ContextForOpenable.Provider value={openableController}>
              <SpaceMapAddSceneModal />
            </ContextForOpenable.Provider>
            <div className='flex w-full flex-row items-center space-x-[2rem]'>
              <div className='flex h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                <p className='text-2xl font-bold text-slate-300'>
                  {sceneListController.state.index + 1}
                </p>
              </div>
              <p className='w-full font-bold text-slate-300'>
                Producer: A music producer oversees the creation of a song using
                software tools, shaping its sound and structure.
              </p>
              <div className='flex flex-col items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className='h-[2rem] w-[2rem] cursor-pointer'
                  fill='none'
                  onClick={() => {
                    if (
                      sceneListController.state.index ===
                      sceneListController.state.objs.length - 1
                    ) {
                      openableController.open();
                    } else {
                      sceneListController.actions.stateActions.goNext();
                    }
                  }}
                >
                  <mask
                    id='mask0_3266_7'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='25'
                    height='25'
                  >
                    <rect
                      x='0.0400391'
                      y='0.563477'
                      width='24'
                      height='24'
                      fill='#D9D9D9'
                    />
                  </mask>
                  <g mask='url(#mask0_3266_7)'>
                    <path
                      d='M12.04 11.3635L7.44004 15.9635L6.04004 14.5635L12.04 8.56348L18.04 14.5635L16.64 15.9635L12.04 11.3635Z'
                      fill='#CBD5E1'
                    />
                  </g>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className='h-[2rem] w-[2rem] cursor-pointer'
                  fill='none'
                  onClick={() => {
                    sceneListController.actions.stateActions.goPrev();
                  }}
                >
                  <mask
                    id='mask0_3266_13'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='24'
                    height='24'
                  >
                    <rect width='24' height='24' fill='#D9D9D9' />
                  </mask>
                  <g mask='url(#mask0_3266_13)'>
                    <path
                      d='M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z'
                      fill='#CBD5E1'
                    />
                  </g>
                </svg>
              </div>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </div>
  );
}
