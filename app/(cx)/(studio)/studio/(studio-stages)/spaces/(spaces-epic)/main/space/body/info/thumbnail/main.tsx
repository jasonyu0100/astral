import { useContext } from 'react';
import { ExtendedSpaceContext } from '../../../main';
import {
  SpaceCover,
  SpaceCoverVariant,
} from '@/(components)/(element)/space/main';
import { cn } from '@/(logic)/utils/cn';

export function SpaceInfoThumbnail() {
  const { hover, index, space } = useContext(ExtendedSpaceContext);

  return (
    <div
      className={`relative flex h-[50px] w-[50px] items-center justify-center `}
    >
      <SpaceCover
        variant={SpaceCoverVariant.EVENT_HORIZON}
        file={space?.thumbnail}
        className={cn({
          'animate-spin': hover,
        })}
      />
    </div>
  );
}
