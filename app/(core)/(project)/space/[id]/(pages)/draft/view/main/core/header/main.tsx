import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';

export function SpaceDraftHeader() {
  return (
    <GlassAreaContainer
      name={SpaceDraftHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between`}
      glassFx={glassFx['glass-5']}
    >
      <div className='flex w-1/3 flex-row space-x-[1rem] px-[1rem]'></div>
      <div className='flex w-1/3 flex-row justify-center'>
        <p className='font-bold text-slate-300'>1. Effects</p>
      </div>
      <div className='flex w-1/3 flex-row justify-end space-x-[1rem] px-[2rem]'></div>
    </GlassAreaContainer>
  );
}
