import { AstralAddIcon } from '@/icons/add/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../../modal/controller/main';

export function SpaceMapAddResource() {
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <GlassWindowFrame className='aspect-square w-full'>
      <GlassWindowContents
        className='flex cursor-pointer items-center justify-center'
        onClick={() => modalController.addResourceController.open()}
      >
        <AstralAddIcon className='h-1/2 w-1/2' />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
