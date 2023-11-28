"use client";

import BlockSkeleton, { BlockProps } from "./main";

export default function ThreeByNine({ x, y }: BlockProps) {
  return (
    <BlockSkeleton x={x} y={y} w={12} h={3}/>
  );
}
