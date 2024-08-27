import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../../modal/controller/main';

export function SpaceMapGalleryAdd() {
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <GlassWindowFrame
      className='aspect-[5/3] w-full flex-shrink-0'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents
        onClick={() => modalController.addGalleryController.open()}
        className='flex h-full cursor-pointer items-center justify-center'
      >
        <AstralAddIcon className='h-1/2 w-1/2' />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
