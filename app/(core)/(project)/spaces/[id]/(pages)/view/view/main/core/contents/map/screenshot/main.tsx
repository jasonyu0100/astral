import { ContextForSpacesView } from '@/(core)/(project)/spaces/[id]/(pages)/view/controller/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesViewScreenshot() {
  const spacesViewController = useContext(ContextForSpacesView);
  return (
    <div className='absolute right-[2rem] top-[0rem] z-30 flex h-full w-[4rem] flex-col items-center justify-center'>
      <GlassWindowFrame
        roundedFx={roundedFx['rounded-full']}
        borderFx={borderFx['border-all']}
        className='h-[4rem] w-[4rem]'
      >
        <GlassWindowContents
          className='flex h-full w-full flex-col items-center justify-center bg-blue-600'
          onClick={() => spacesViewController.actions.saveAll()}
        >
          <AstralSaveIcon />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
