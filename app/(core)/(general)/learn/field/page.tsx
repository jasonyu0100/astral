'use client';

import { useState } from 'react';

function rng(): boolean {
  return Boolean(Math.round(Math.random()));
}

function Bound({
  polarity,
  shape,
  children,
}: {
  polarity: boolean;
  shape: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`flex aspect-square w-1/2 flex-row flex-wrap overflow-auto ${
        polarity
          ? 'border-[1px] border-black bg-white'
          : 'border-[1px] border-white bg-black'
      } ${shape ? 'rounded-full' : 'rounded-none'}`}
    >
      {children}
    </div>
  );
}

function Layer({
  polarity,
  shape,
  children,
}: {
  polarity: boolean;
  shape: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex aspect-square w-1/2 flex-row flex-wrap overflow-auto ${
        polarity
          ? 'border-[1px] border-black bg-white'
          : 'border-[1px] border-white bg-black'
      } ${shape ? 'rounded-full' : 'rounded-none'}`}
    >
      <Bound polarity={rng()} shape={rng()}>
        {children}
      </Bound>
      <Bound polarity={rng()} shape={rng()}>
        {children}
      </Bound>
      <Bound polarity={rng()} shape={rng()}>
        {children}
      </Bound>
      <Bound polarity={rng()} shape={rng()}>
        {children}
      </Bound>
    </div>
  );
}

export default function Page() {
  const [layerNum, changeLayerNum] = useState(2);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-black'>
      <Bound polarity={rng()} shape={rng()}>
        <Layer polarity={rng()} shape={rng()}>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
        </Layer>
        <Layer polarity={rng()} shape={rng()}>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
        </Layer>
        <Layer polarity={rng()} shape={rng()}>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
        </Layer>
        <Layer polarity={rng()} shape={rng()}>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
          <Bound polarity={rng()} shape={rng()}></Bound>
        </Layer>
      </Bound>

      <br />
      <button className='aspect-square bg-black p-[1rem] font-bold text-white'>
        ROTATE
      </button>
    </div>
  );
}

// oooo
// 0000
// 1234
// 3142
// 2134
// 0100
// 1000
// 1111
// 1010
// 4312
