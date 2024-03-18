'use client';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { borderStyles, containerStyles } from '@/(design)/(styles)/data';

export function RecordShelf({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={RecordShelf.name}
      sizeStyle='h-[250px] w-full'
      borderStyle={borderStyles['border-b']}
      className={`space-x-[100px] px-[60px] ${containerStyles.row}`}
    >
      {children}
    </GlassContainer>
  );
}
