import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../../modal/controller/main';

export function SpaceMapCollectionAdd() {
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <GlassWindowFrame
      className='aspect-[3/2] w-full flex-shrink-0'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents
        onClick={() => modalController.addCollectionController.open()}
        className='flex h-full cursor-pointer items-center justify-center'
      >
        <AstralAddIcon />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
