import { useContext } from 'react';
import {
  SpaceCover,
  SpaceCoverVariant,
} from '@/(components)/(element)/space/main';
import { cn } from '@/(utils)/cn';
import { ContextForHoverable } from '@/(logic)/contexts/hoverable/main';
import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { ContextForSpaceObj } from '@/(model)/space/main';

export function SpaceInfoThumbnail() {
  const space = useContext(ContextForSpaceObj);
  const { hovered } = useContext(ContextForHoverable);

  return (
    <div
      className={`relative flex h-[50px] w-[50px] items-center justify-center `}
    >
      <SpaceCover
        variant={SpaceCoverVariant.EVENT_HORIZON}
        fileElem={space?.thumbnail}
        className={cn({
          'animate-spin': hovered,
        })}
      />
    </div>
  );
}
