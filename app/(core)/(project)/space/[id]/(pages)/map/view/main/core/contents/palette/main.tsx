import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../controller/map/main';
import { SpaceMapPaletteDefault } from './default/main';
import { SpaceMapPaletteSelected } from './selected/main';

export function SpaceMapCoreContentsPalette() {
  const mapController = useContext(ContextForSpaceMap);

  return (
    <GlassWindowFrame
      className='w-full py-[2rem]'
      roundedFx={roundedFx['rounded-full']}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex flex-col items-center justify-center space-y-[1rem]'>
        {mapController.selectedIdea === null ? (
          <SpaceMapPaletteSelected />
        ) : (
          <SpaceMapPaletteDefault />
        )}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
