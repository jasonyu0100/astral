"use client";

import BlockSkeleton, { BlockProps } from "./main";

export default function FourByFour({ x, y }: BlockProps) {
  return (
    <BlockSkeleton x={x} y={y} w={4} h={4}/>
  );
}




