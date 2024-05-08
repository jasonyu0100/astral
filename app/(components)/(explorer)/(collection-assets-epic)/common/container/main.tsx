import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { cn } from '@/(utils)/cn';
import { DivInputProps } from '@/(types)/element/main';
import React from 'react';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function CollectionContainer({
  children,
  ...props
}: InputProps) {
  return (
    <GlassWindowFrame
      name={CollectionContainer.name}
      className={cn(`aspect-[32/16] w-full`, props.className)}
    >
      <GlassWindowContents className='flex flex-row items-center'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
