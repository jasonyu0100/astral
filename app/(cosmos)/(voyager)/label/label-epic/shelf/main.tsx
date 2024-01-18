'use client';
import { Layer } from '@/(common)/layer/main';
import { borderStyles, containerStyles } from '@/(common)/styles/data';

export function RecordShelf({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={RecordShelf.name}
      sizeStyle='h-[250px] w-full'
      borderStyle={borderStyles['border-b']}
      className={`px-[40px] space-x-[100px] ${containerStyles}`}
    >
      {children}
    </Layer>
  );
}
