import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { roundedFx } from '@/(style)/data';

export function JournalRecordFooterCenter() {
  return (
    <div className='flex w-1/3 flex-row justify-center space-x-[1rem] '>
      <GlassWindowFrame
        className='aspect-square h-[3rem] w-[3rem]'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents className='flex items-center justify-center bg-blue-500'>
          <p className='text-3xl font-bold text-slate-300'>+</p>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
