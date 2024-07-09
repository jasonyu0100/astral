import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { borderFx } from '@/(style)/data';

export function SpaceIdeasSidebarSearch() {
  return (
    <div className='flex h-[4rem] w-full flex-shrink-0 items-center justify-center shadow-glow'>
      <GlassWindowFrame
        className='h-full w-full flex-shrink-0'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents className='h-full w-full'>
          <input
            className='text-md h-full w-full animate-pulse-slow rounded-full bg-transparent px-[1rem] font-bold text-slate-700 outline-none'
            placeholder='Venture forth...'
          ></input>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
