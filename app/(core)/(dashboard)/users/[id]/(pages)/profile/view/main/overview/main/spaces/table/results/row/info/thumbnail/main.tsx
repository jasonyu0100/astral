import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import {
  SpaceThumbnailElement,
  SpaceThumbnailVariant,
} from '@/ui/cover/space/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpaceInfoThumbnail() {
  const space = useContext(ContextForSpaceObj);
  const hoverableController = useContext(ContextForHoverable);

  return (
    <div
      className={`flex h-[2.5rem] w-[2.5rem] flex-shrink-0 items-center justify-center`}
    >
      <SpaceThumbnailElement
        variant={SpaceThumbnailVariant.EVENT_HORIZON}
        fileElem={space?.thumbnail}
        className={cn({
          'animate-spin': hoverableController.hovered,
        })}
      />
    </div>
  );
}
