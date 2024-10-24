import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import React from 'react';

export function HorizonsArcSidebarTab({
  children,
}: {
  children: React.ReactNode;
}) {
  const hoverableController = useControllerForHoverable();

  return (
    <div
      className='w-full'
      onMouseEnter={() => hoverableController.onHover()}
      onMouseLeave={() => hoverableController.onUnhover()}
    >
      <GlassWindowFrame
        className='w-full p-[1rem]'
        roundedFx={roundedFx['rounded-t']}
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents>
          <p className='font-bold text-slate-300'>{children}</p>
        </GlassWindowContents>
        {hoverableController.hovered && (
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
