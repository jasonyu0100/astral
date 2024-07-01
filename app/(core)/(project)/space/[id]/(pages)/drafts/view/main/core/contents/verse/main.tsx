import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceDraftsContentsVerse() {
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <GlassWindowFrame
      className='h-full w-full px-[2rem]'
      borderFx={`${borderFx['border-l']} ${borderFx['border-r']}`}
    >
      <GlassWindowContents className='flex w-full flex-row items-center'>
        <div className='flex h-full flex-grow flex-col space-y-[2rem] p-[2rem]'>
          <div className='flex h-full w-full flex-col space-y-[2rem]'>
            {/* <p className='font-bold text-slate-500'>
              V
              {verseListController.state.objs.length -
                verseListController.state.index}
            </p> */}
            <img
              className='aspect-[16/9] w-[700px] flex-shrink-0 border-[5px] border-white object-cover'
              src={verseListController.state.currentObj?.fileElem?.src}
            />
            <div className='space-y-[0.5rem] px-[0.5rem]'>
              <p className=' text-sm font-light text-white'>
                {getFormattedDate(
                  new Date(verseListController.state.currentObj?.created ?? ''),
                )}
              </p>
              <p className='text-xl font-bold text-white'>
                Verse - {verseListController.state.currentObj?.title}
              </p>
              <p className=' text-white'>
                {verseListController.state.currentObj?.description}
              </p>
            </div>
          </div>
          <HorizontalDivider />
          <div className='flex flex-col space-y-[1rem]'>
            <div className='flex flex-row'>
              <img
                className='aspect-square h-[50px] rounded-full'
                src={exampleFileElem.src}
              />
              <p className='font-bold text-slate-300'>adsasda</p>
            </div>
            <div className='flex flex-row'>
              <img
                className='aspect-square h-[50px] rounded-full'
                src={exampleFileElem.src}
              />
              <p className='font-bold text-slate-300'>adsasda</p>
            </div>
            <div className='flex flex-row'>
              <img
                className='aspect-square h-[50px] rounded-full'
                src={exampleFileElem.src}
              />
              <p className='font-bold text-slate-300'>adsasda</p>
            </div>
            <div className='flex flex-row'>
              <img
                className='aspect-square h-[50px] rounded-full'
                src={exampleFileElem.src}
              />
              <p className='font-bold text-slate-300'>adsasda</p>
            </div>
          </div>
        </div>
        <GlassWindowFrame
          className='h-full w-[20rem]'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex flex-col space-y-[1rem] p-[2rem]'>
            <div className='flex h-[70px] w-full flex-row items-center space-x-[2rem]'>
              <p className='text-sm font-bold text-white'>1.</p>
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
              <p className='text-sm font-bold text-white'>1.</p>
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
              <p className='text-sm font-bold text-white'>1.</p>
              <img
                src={exampleFileElem.src}
                className='aspect-square h-full rounded'
              />
              <div className='flex flex-col'>
                <p className='text-sm font-bold text-white'>Hello World</p>
                <p className='text-sm font-bold text-white'>Hello World</p>
              </div>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
