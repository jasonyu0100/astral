import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { getFormattedDate } from '@/(utils)/dateFormat';

export function SpaceSeaEditCard() {
  return (
    <GlassWindowFrame
      className='aspect-[9/13] h-[500px] flex-shrink-0'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-col p-[2rem]'>
        <p className='text-md font-light text-slate-300'>
          {getFormattedDate(new Date())}
        </p>
        <p className='text-xl font-bold text-slate-300'>New Chapter</p>
        <br />
        <p className='font-bold text-slate-300'>Chapter One</p>
        <p className='text-slate-300'>The initial melodic sound</p>
        <br />
        <p className='text-slate-300'>Scenes</p>
        <p className='text-slate-300'>1. untitled</p>
        <p className='text-slate-300'>2. hello world</p>
        <br />
        <p className='text-slate-300'>Chats</p>
        <p className='text-slate-300'>1. about the sound</p>
        <br />
        <p className=' text-slate-300'>Verses</p>
        <p className=' text-slate-300'>1. Initial Sound</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
