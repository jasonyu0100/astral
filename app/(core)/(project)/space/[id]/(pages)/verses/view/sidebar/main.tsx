import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForVerseCommentList } from '@/(server)/(controller)/space/chapter/verse/comment/list';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceVersesAddVerseCommentModal } from '../../(modal)/add/comment/main';
import { SpaceVersesAddVerseModal } from '../../(modal)/add/verse/main';
import { SpaceVersesSidebarAddVerse } from './add/verse/main';

export function SpaceVersesSidebar() {
  const commentOpenableController = useControllerForOpenable();
  const verseOpenableController = useControllerForOpenable();
  const commentListController = useContext(ContextForVerseCommentList);

  return (
    <>
      <ContextForOpenable.Provider value={commentOpenableController}>
        <SpaceVersesAddVerseCommentModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={verseOpenableController}>
        <SpaceVersesAddVerseModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceVersesSidebar.name}
        sizeFx='w-[300px] h-full'
        glassFx={glassFx['glass-5']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <div className='flex h-[4rem] w-full items-center justify-center p-[1rem] shadow-glow'>
          <GlassWindowFrame
            className='h-[2rem] w-full flex-shrink-0'
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
          <GlassAreaContainer
            sizeFx='h-full w-full'
            className='flex flex-col overflow-auto p-[1rem]'
            name={''}
          >
            <div className='h-full w-full overflow-auto  pr-[1rem]'>
              <div className='flex flex-col space-y-[1rem]'>
                <SpaceVersesSidebarAddVerse
                  onClick={verseOpenableController.open}
                />{' '}
                <div className='flex h-[70px] w-full flex-row items-center space-x-[2rem]'>
                  <GlassWindowFrame className='aspect-square h-full'>
                    <GlassWindowContents className='flex items-center justify-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <mask
                          id='mask0_3290_2252'
                          maskUnits='userSpaceOnUse'
                          x='0'
                          y='0'
                          width='24'
                          height='24'
                        >
                          <rect width='24' height='24' fill='#D9D9D9' />
                        </mask>
                        <g mask='url(#mask0_3290_2252)'>
                          <path
                            d='M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z'
                            fill='#CBD5E1'
                          />
                        </g>
                      </svg>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <div className='flex flex-col'>
                    <p className='text-sm font-bold text-white'>New Verse</p>
                  </div>
                </div>
                <div className='flex h-[70px] w-full flex-row items-center space-x-[2rem]'>
                  <img
                    src={exampleFileElem.src}
                    className='aspect-square h-full rounded'
                  />
                  <div className='flex flex-col'>
                    <p className='text-sm font-bold text-white'>Hello World</p>
                    <p className='text-sm font-bold text-white'>Hello World</p>
                  </div>
                </div>
                <div className='flex h-[70px] w-full flex-row items-center space-x-[2rem]'>
                  <img
                    src={exampleFileElem.src}
                    className='aspect-square h-full rounded'
                  />
                  <div className='flex flex-col'>
                    <p className='text-sm font-bold text-white'>Hello World</p>
                    <p className='text-sm font-bold text-white'>Hello World</p>
                  </div>
                </div>
                <div className='flex h-[70px] w-full flex-row items-center space-x-[2rem]'>
                  <img
                    src={exampleFileElem.src}
                    className='aspect-square h-full rounded'
                  />
                  <div className='flex flex-col'>
                    <p className='text-sm font-bold text-white'>Hello World</p>
                    <p className='text-sm font-bold text-white'>Hello World</p>
                  </div>
                </div>
                {/* <HorizontalDivider />
                {commentListController.state.objs.map((comment) => (
                  <ContextForVerseCommentObj.Provider value={comment}>
                    <SpaceVersesSidebarComment></SpaceVersesSidebarComment>
                  </ContextForVerseCommentObj.Provider>
                ))}
                <SpaceVersesSidebarAddComment
                  onClick={commentOpenableController.open}
                /> */}
              </div>
            </div>
          </GlassAreaContainer>
        </div>
      </GlassAreaContainer>
    </>
  );
}
