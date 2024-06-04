'use client';
import React from 'react';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

import { ColorfulText } from '@/(components)/(text)/colorful/main';
export default function Page() {
  const text = 'Hello World';
  return (
    <GlassWindowFrame className='flex w-full flex-row flex-wrap space-y-[1rem] bg-black p-[2rem]'>
      <div className='flex flex-col'>
        <ColorfulText seed={text}>{text}</ColorfulText>
        <p className='font-md text-white'>Hello World</p>
        <p className='font-permanentMarker text-white'>Hello World</p>
        <p className='font-bold text-white'>Hello World</p>
        <p className='font-light text-white'>Hello World</p>
        <p className='font-ectraBold text-white'>Hello World</p>
      </div>
    </GlassWindowFrame>
  );
}
