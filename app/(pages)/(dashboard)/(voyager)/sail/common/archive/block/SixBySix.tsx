"use client";

import BlockSkeleton, { BlockProps } from "./main";

export default function SixBySix({ x, y }: BlockProps) {
  return (
    <BlockSkeleton x={x} y={y} w={6} h={6}/>
  );
}


