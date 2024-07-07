'use client';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

import { ColorfulText } from '@/(components)/(text)/colorful/main';
export default function Page() {
  const text = 'Hello World';
  return (
    <GlassWindowFrame className='flex w-full flex-row flex-wrap space-y-[1rem] bg-black p-[2rem]'>
      <div className='flex flex-col'>
        <ColorfulText seed={text}>{text}</ColorfulText>
        <p className='font-md text-slate-900'>Hello World</p>
        <p className='font-permanentMarker text-slate-900'>Hello World</p>
        <p className='font-bold text-slate-800'>Hello World</p>
        <p className='font-light text-slate-900'>Hello World</p>
        <p className='font-ectraBold text-slate-900'>Hello World</p>
      </div>
    </GlassWindowFrame>
  );
}
