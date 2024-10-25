import {
  SpaceThumbnailElement,
  SpaceThumbnailVariant,
} from '@/components/cover/space/main';
import { ContextForHoverable } from '@/logic/contexts/hoverable/main';
import { ContextForSpaceObj } from '@/server/model/space/main';
import { ctwn } from '@/utils/cn';
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
        className={ctwn({
          'animate-spin': hoverableController.hovered,
        })}
      />
    </div>
  );
}
