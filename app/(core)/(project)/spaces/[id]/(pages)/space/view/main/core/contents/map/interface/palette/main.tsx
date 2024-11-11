import { ContextForSpacesSpace } from '@/(core)/(project)/spaces/[id]/(pages)/space/controller/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { SpacesSpacePaletteDefault } from './default/main';
import { SpacesSpacePaletteSelected } from './selected/main';

export function SpacesSpacePalette() {
  const spacesSpaceController = useContext(ContextForSpacesSpace);

  return (
    <div className='absolute bottom-[1rem] left-[1rem] z-30 flex h-[6rem] w-full flex-row items-center justify-center'>
      <GlassWindowFrame
        className='h-full px-[2rem]'
        roundedFx={roundedFx['rounded-full']}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex flex-row items-center justify-center space-x-[2rem]'>
          {spacesSpaceController.state.selectedIdeas.length === 0 ? (
            <SpacesSpacePaletteDefault />
          ) : (
            <SpacesSpacePaletteSelected />
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
