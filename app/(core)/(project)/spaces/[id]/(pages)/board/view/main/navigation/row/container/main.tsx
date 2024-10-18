import {
  ContextForScrollToHorizontalIndex,
  useControllerForScrollToHorizontalIndex,
} from '@/logic/controller/scroll-to-horizontal-index/main';
import { useRef } from 'react';

export function SpacesBoardRowContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  const ref = useRef(null);
  const controllerForScrollToCursor =
    useControllerForScrollToHorizontalIndex(ref);

  return (
    <div
      ref={ref}
      className='flex h-full flex-grow flex-row items-center space-x-[3px] overflow-auto'
    >
      <ContextForScrollToHorizontalIndex.Provider
        value={controllerForScrollToCursor}
      >
        {children}
      </ContextForScrollToHorizontalIndex.Provider>
    </div>
  );
}
