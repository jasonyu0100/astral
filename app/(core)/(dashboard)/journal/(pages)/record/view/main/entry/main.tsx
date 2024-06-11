import { ProfileCover } from '@/(components)/(element)/profile/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';

export function JournalEntry() {
  return (
    <GlassWindowFrame
      className='w-full max-w-[1000px]'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded']}
    >
      <GlassWindowContents>
        <div className='flex flex-row items-center space-x-[1rem] p-[1rem]'>
          <div className='flex flex-col'>
            <p className='font-bold text-slate-300'>John Smith</p>
            <p className='text-slate-500'>Space XYZ</p>
          </div>
        </div>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
        <GlassWindowFrame className='h-[12rem] w-full'>
          <GlassWindowContents>
            <textarea
              className='text-md h-full w-full bg-transparent p-[1rem] font-bold text-slate-500 outline-none'
              placeholder='Write something...'
            />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
