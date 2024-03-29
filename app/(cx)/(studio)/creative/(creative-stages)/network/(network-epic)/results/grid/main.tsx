'use client';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { borderStyles, containerStyles } from '@/(design)/(styles)/data';

export function CreativeRow({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={CreativeRow.name}
      size='w-full h-full'
      border={borderStyles['border-b']}
      className={`flex flex-row flex-wrap gap-[2rem] p-[2rem]`}
    >
      {children}
    </GlassAreaContainer>
  );
}
