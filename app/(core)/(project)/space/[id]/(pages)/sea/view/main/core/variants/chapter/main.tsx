import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { exampleFileElems } from '@/(server)/(model)/elements/file/main';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceSeaUnaddedCard } from '../../card/main';

export function SpaceSeaCardChapter() {
  const flippableController = useControllerForFlippable();
  const chapter = useContext(ContextForSpaceChapterObj);

  return (
    <SpaceSeaUnaddedCard>
      <div
        className='h-full w-full cursor-pointer'
        onClick={flippableController.flip}
      >
        {flippableController.flipped ? (
          <div className='flex h-full w-full flex-col'>
            <div className='h-full w-full space-y-[0.5rem] p-[0.5rem] font-bold text-slate-300'>
              <p>Collabs </p>
              <div className='flex flex-row flex-wrap gap-[1rem]'>
                {exampleFileElems.map((fileElem) => (
                  <img
                    className='h-[2rem] w-[2rem] rounded-full object-cover'
                    src={fileElem.src}
                  />
                ))}
              </div>
            </div>
            <GlassWindowFrame className='aspect-square w-full flex-shrink-0'>
              <GlassWindowContents className=' h-full w-full'>
                <textarea
                  className='w-full resize-none bg-transparent p-[1rem] text-slate-300'
                  placeholder='Add notes here'
                ></textarea>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          </div>
        ) : (
          <div className='h-full w-full p-[1rem] font-bold '>
            <p className='text-bold text-slate-300'>{chapter.title}</p>
          </div>
        )}
      </div>
    </SpaceSeaUnaddedCard>
  );
}
