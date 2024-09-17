import { ContextForSpacesMap } from '@/(core)/(project)/spaces/[id]/(pages)/map/controller/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { SpacesMapPaletteDefault } from './default/main';
import { SpacesMapPaletteSelected } from './selected/main';

export function SpacesMapPalette() {
  const {
    state: { selectedIdeas },
  } = useContext(ContextForSpacesMap);

  return (
    <div className='absolute left-[2rem] flex h-full w-[4rem] flex-col items-center justify-center'>
      <GlassWindowFrame
        className='w-[4rem] py-[2rem]'
        roundedFx={roundedFx['rounded-full']}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex flex-col items-center justify-center space-y-[1rem]'>
          {selectedIdeas.length === 0 ? (
            <SpacesMapPaletteSelected />
          ) : (
            <SpacesMapPaletteDefault />
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
