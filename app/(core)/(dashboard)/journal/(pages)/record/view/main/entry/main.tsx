import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';

export function JournalEntry() {
  return (
    <GlassWindowFrame
      className='w-full'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded']}
    >
      <GlassWindowContents>
        {/* <div className='p-[1rem]'>
          <p className='text-lg font-bold text-slate-500'>
            Make a journal record
          </p>
          <p className='font-bold text-slate-500'>25/5/2022</p>
        </div> */}
        <GlassWindowFrame className='h-[10rem] w-full'>
          <GlassWindowContents>
            <textarea
              className='h-full w-full font-bold text-md bg-transparent p-[1rem] text-slate-500 outline-none'
              placeholder='Write something...'
            />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
