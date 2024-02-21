'use client';
import { Glass } from '@/(common)/layer/main';
import { borderStyles, containerStyles } from '@/(common)/styles/data';

export function RecordShelf({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={RecordShelf.name}
      sizeStyle='h-[250px] w-full'
      borderStyle={borderStyles['border-b']}
      className={`space-x-[100px] px-[40px] ${containerStyles.row}`}
    >
      {children}
    </Glass>
  );
}
