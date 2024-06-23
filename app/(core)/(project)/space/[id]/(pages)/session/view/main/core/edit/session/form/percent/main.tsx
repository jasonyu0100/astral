import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function SpaceSessionUpdateFormPercent() {
  return (
    <div className='flex flex-col space-y-[0.5rem]'>
      <p className='text-xs font-bold text-slate-300'>Contribution</p>
      <GlassWindowFrame
        className='w-full py-[0.5rem]'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents className='grid grid-cols-6 divide-x-[1px] divide-slate-300 divide-opacity-30 text-sm font-bold text-slate-300'>
          <div className='flex items-center justify-center'>
            <p>None</p>
          </div>
          <div className='flex items-center justify-center'>
            <p>1%</p>
          </div>
          <div className='flex items-center justify-center'>
            <p>2%</p>
          </div>
          <div className='flex items-center justify-center'>
            <p>5%</p>
          </div>
          <div className='flex items-center justify-center'>
            <p>10%</p>
          </div>
          <div className='flex items-center justify-center'>
            <p>20%</p>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
