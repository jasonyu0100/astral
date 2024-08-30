import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import React from 'react';
import { SpaceChatSidebarChapter } from '../../../main';

export function SpaceChatActiveContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame name={SpaceChatSidebarChapter.name} className='mb-[1rem]'>
      <GlassWindowContents className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
