import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceFlowAddVerseModal } from '../../../../../(modal)/add/verse/main';

export function SpaceFlowContentsDisplay() {
  const flippableController = useControllerForFlippable();
  const verseListController = useContext(ContextForChapterVerseList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceFlowAddVerseModal />
      </ContextForOpenable.Provider>
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
            <GlassWindowContents
              className='flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-500'
              onClick={() => {
                openableController.open();
              }}
            >
              <p className='text-5xl font-bold text-white'>+</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <HorizontalDivider />
          {verseListController.state.objs.map((obj) => (
            <>
              <GlassWindowFrame className='w-full p-[2rem]'>
                <GlassWindowContents className='flex w-full flex-row items-center space-x-[2rem]'>
                  <img
                    className='aspect-square h-[300px] border-[5px] border-white object-cover'
                    src={obj.fileElem?.src}
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
      </GlassAreaContainer>
    </>
  );
}
