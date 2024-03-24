'use client';
import { GlassFrame } from '@/(components)/(basic)/glass/frame/main';
import { GlassPane } from '@/(components)/(basic)/glass/pane/main';
import { borderStyles, containerStyles } from '@/(design)/(styles)/data';

export function VentureShelf({ children }: { children: React.ReactNode }) {
  return (
    <GlassFrame
      borderStyle={borderStyles['border-b']}
      className={`flex w-full flex-row px-[4rem] py-[2rem] space-x-[3rem]`}
    >
      {children}
    </GlassFrame>
  );
}
