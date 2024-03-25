'use client';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { borderStyles, containerStyles } from '@/(design)/(styles)/data';

export function CreativeRow({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={CreativeRow.name}
      sizeStyle='w-full h-full'
      borderStyle={borderStyles['border-b']}
      className={`flex flex-row flex-wrap gap-[2rem] p-[2rem]`}
    >
      {children}
    </GlassContainer>
  );
}
