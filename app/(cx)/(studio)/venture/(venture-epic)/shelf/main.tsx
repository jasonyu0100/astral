'use client';
import { GlassWindowContents } from '@/(components)/(basic)/glass/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(basic)/glass/window/main';
import { borderStyles } from '@/(design)/(styles)/data';

export function VentureShelf({ children }: { children: React.ReactNode }) {
  return (
    <GlassWindowFrame
      borderStyle={borderStyles['border-b']}
    >
      <GlassWindowContents
        className={`flex w-full flex-row space-x-[3rem] px-[4rem] py-[2rem]`}
      >
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
