"use client";

import BlockSkeleton, { BlockProps } from "./main";

export default function TwelveByNine({ x, y }: BlockProps) {
  return (
    <BlockSkeleton x={x} y={y} w={12} h={9}/>
  );
}
