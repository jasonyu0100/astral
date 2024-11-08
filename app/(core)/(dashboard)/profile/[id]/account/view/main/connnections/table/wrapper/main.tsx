'use client';
import {
  ContextForHoverable,
  useControllerForHoverable,
} from '@/logic/contexts/hoverable/main';

export function ProfileConnectionsRowWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const hoverableController = useControllerForHoverable();

  return (
    <ContextForHoverable.Provider value={hoverableController}>
      <ContextForHoverable.Provider value={hoverableController}>
        <div
          className={`flex h-full w-full flex-row items-center justify-between rounded-[1rem] ${
            hoverableController.hovered ? 'bg-slate-400 bg-opacity-30' : ''
          }`}
          onMouseOver={() => hoverableController.onHover()}
          onMouseOut={() => hoverableController.onUnhover()}
        >
          {children}
        </div>
      </ContextForHoverable.Provider>
    </ContextForHoverable.Provider>
  );
}
