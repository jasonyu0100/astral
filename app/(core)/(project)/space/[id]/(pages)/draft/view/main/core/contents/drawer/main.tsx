import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function SpaceDraftContentsDrawer() {
  return (
    <div className='flex w-full flex-col'>
      <div className='p-[1rem]'>
        <p className='font-bold text-slate-300'>Journal Record</p>
      </div>
      <GlassWindowFrame
        className='h-[10rem] w-full overflow-auto'
        roundedFx={roundedFx['rounded-container']}
      >
        <GlassWindowContents className='flex w-full flex-row space-x-[1rem] p-[1rem]'>
          <div className='aspect-square h-full bg-white'>
            <img
              className='h-full w-full object-cover'
              src='https://plus.unsplash.com/premium_photo-1715071976245-b4ab72b6c48b?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ></img>
          </div>
          <div className='aspect-square h-full bg-white'>
            <img
              className='h-full w-full object-cover'
              src='https://plus.unsplash.com/premium_photo-1715071976245-b4ab72b6c48b?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ></img>
          </div>
          <div className='aspect-square h-full bg-white'>
            <img
              className='h-full w-full object-cover'
              src='https://plus.unsplash.com/premium_photo-1715071976245-b4ab72b6c48b?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ></img>
          </div>
          <div className='flex aspect-square h-full items-center justify-center bg-white'>
            <p className='text-3xl text-slate-500'>+</p>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
