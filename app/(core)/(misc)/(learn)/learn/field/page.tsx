"use client";

import { useState } from "react";

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
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-1/2 overflow-auto flex flex-row flex-wrap aspect-square ${
        polarity
          ? "bg-white border-black border-[1px]"
          : "bg-black border-white border-[1px]"
      } ${shape ? "rounded-full" : "rounded-none"}`}
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
      className={`w-1/2 overflow-auto flex flex-row flex-wrap aspect-square ${
        polarity
          ? "bg-white border-black border-[1px]"
          : "bg-black border-white border-[1px]"
      } ${shape ? "rounded-full" : "rounded-none"}`}
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
    <div className="flex flex-col w-full h-screen items-center justify-center bg-black">
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
      <button className="bg-black aspect-square font-bold text-white p-[1rem]">
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