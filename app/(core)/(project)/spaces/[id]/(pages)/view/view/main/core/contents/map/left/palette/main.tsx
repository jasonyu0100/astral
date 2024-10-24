import { ContextForSpacesMap } from '@/(core)/(project)/spaces/[id]/(pages)/view/controller/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { SpacesMapPaletteSelected } from './default/main';
import { SpacesMapPaletteDefault } from './selected/main';

export function SpacesMapPalette() {
  const {
    state: { selectedIdeas },
  } = useContext(ContextForSpacesMap);

  return (
    <div className='absolute left-[2rem] top-[0rem] z-30 flex h-full w-[4rem] flex-col items-center justify-center'>
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
