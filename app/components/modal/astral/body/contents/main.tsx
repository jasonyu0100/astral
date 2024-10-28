import { DivInputProps } from '@/props/main';
import React from 'react';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function AstralModalBodyAction({ children, ...props }: InputProps) {
  return (
    <div
      className={`flex flex-shrink-0 flex-col space-y-[1rem] ${props.className}`}
    >
      {children}
    </div>
  );
}
