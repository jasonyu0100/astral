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
      <div
        className='flex w-full flex-row justify-between'
        style={{ height: '100%' }}
      >
        <div className='h-full flex-grow'>
          <SpaceMapContentsScene />
        </div>
        <div className='flex h-full w-[6rem] flex-col items-center justify-center space-y-[1rem] pr-[2rem]'>
          <GlassWindowFrame
            className='w-full py-[2rem]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents className='flex flex-col items-center justify-center space-y-[1rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                className='fill-slate-300'
              >
                <path d='m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                className='fill-slate-300'
              >
                <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                className='fill-slate-300'
              >
                <path d='M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                className='fill-slate-300'
              >
                <path d='m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z' />
              </svg>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>
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
