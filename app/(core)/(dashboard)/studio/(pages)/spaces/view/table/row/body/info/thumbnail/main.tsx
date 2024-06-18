import {
  SpaceCover,
  SpaceCoverVariant,
} from '@/(components)/(element)/space/main';
import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';
import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { cn } from '@/(utils)/cn';
import { useContext } from 'react';

export function SpaceInfoThumbnail() {
  const space = useContext(ContextForSpaceObj);
  const hoverableController = useContext(ContextForHoverable);

  return (
    <div
      className={`relative flex h-[50px] w-[50px] items-center justify-center`}
    >
      <SpaceCover
        variant={SpaceCoverVariant.EVENT_HORIZON}
        fileElem={space?.thumbnail}
        className={cn({
          'animate-spin': hoverableController.hovered,
        })}
      />
    </div>
  );
}
