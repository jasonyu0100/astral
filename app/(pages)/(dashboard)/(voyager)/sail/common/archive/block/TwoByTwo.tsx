"use client";

import BlockSkeleton, { BlockProps } from "./main";

export default function TwoByTwo({ x, y }: BlockProps) {
  return (
    <BlockSkeleton x={x} y={y} w={2} h={2}/>
  );
}
