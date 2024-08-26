'use client';
import {
  ContextForHoverable,
  useControllerForHoverable,
} from '@/logic/contexts/hoverable/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';

export function UserProfileRowWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const hoverableController = useControllerForHoverable();

  return (
    <ContextForHoverable.Provider value={hoverableController}>
      <div
        className='w-full'
        onMouseOver={() => hoverableController.onHover()}
        onMouseOut={() => hoverableController.onUnhover()}
      >
        <GlassWindowFrame className='w-full'>
          <GlassWindowContents
            className={`flex h-full w-full flex-row items-center justify-between`}
          >
            {children}
          </GlassWindowContents>
          <GlassWindowPane
            glassFx={`${hoverableController.hovered && glassFx['glass-10']}`}
          />
        </GlassWindowFrame>
      </div>
    </ContextForHoverable.Provider>
  );
}
