import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceFlowContentsDisplay() {
  const flippableController = useControllerForFlippable();
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <GlassAreaContainer
      name={SpaceFlowContentsDisplay.name}
      sizeFx='flex-grow h-full'
      className={`space-y-[3rem] overflow-auto p-[2rem]`}
    >
      <div className='flex w-full flex-grow flex-col items-center space-y-[2rem]'>
        <GlassWindowFrame
          className='h-[50px] w-[50px]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents className='flex h-full w-full items-center justify-center rounded-full bg-blue-500'>
            <p className='text-5xl font-bold text-white'>+</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <HorizontalDivider />
        {verseListController.state.objs.map((obj) => (
          <>
            <GlassWindowFrame className='p-[2rem]'>
              <GlassWindowContents className='flex h-[300px] flex-row items-center space-x-[2rem]'>
                <img
                  className='aspect-square h-[300px] border-[5px] border-white object-cover'
                  src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
                <div className='space-y-[0.5rem] px-[0.5rem]'>
                  <p className='text-lg font-bold text-white'>
                    Verse - {obj.title}
                  </p>
                  <p className=' text-white'>{obj.description}</p>
                </div>
              </GlassWindowContents>
            </GlassWindowFrame>
            <HorizontalDivider />
          </>
        ))}
      </div>
      {/* <div className='flex h-full w-full flex-col items-center justify-center space-y-[2rem] p-[2rem]'>
        <GlassWindowFrame className='aspect-[10/13] h-full flex-shrink-0 bg-white'>
          {flippableController.flipped ? (
            <>
              <GlassWindowContents className='flex flex-col space-y-[1rem]  p-[1rem]'>
                <p>Hello World</p>
              </GlassWindowContents>
            </>
          ) : (
            <>
              <GlassWindowContents className='flex flex-col space-y-[1rem]  p-[1rem]'>
                <div className='aspect-square w-full bg-black'>
                  <img
                    className='h-full w-full object-cover'
                    src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  />
                </div>
                <div className='p flex flex-col space-y-[1rem]'>
                  <div className='font-permanentMarker text-2xl text-black'>
                    {verseListController.state.currentObj?.title || 'None'}
                  </div>
                  <div className='font-bold text-slate-500'>
                    {verseListController.state.currentObj?.description ||
                      'None'}
                  </div>
                </div>
              </GlassWindowContents>
            </>
          )}
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <p
          className='mt-[3rem] animate-pulse cursor-pointer text-center text-xl font-bold leading-7 text-slate-500'
          onClick={flippableController.flip}
        >
          FLIP ME
        </p>
      </div> */}
    </GlassAreaContainer>
  );
}
