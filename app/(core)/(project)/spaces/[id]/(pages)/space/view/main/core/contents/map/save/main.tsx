import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesSpace } from '../../../../../../controller/main';

export function SpacesSpaceSave() {
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  return (
    <div className='absolute bottom-[2rem] right-[2rem] z-30 flex w-[4rem] flex-col items-center justify-center'>
      <GlassWindowFrame
        roundedFx={roundedFx['rounded-full']}
        borderFx={borderFx['border-all']}
      >
        <GlassWindowContents
          className='flex h-full w-full flex-col items-center justify-center bg-blue-600'
          onClick={() => spacesSpaceController.actions.saveAll()}
        >
          <AstralSaveIcon className='h-[2rem] w-[2rem]' />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
