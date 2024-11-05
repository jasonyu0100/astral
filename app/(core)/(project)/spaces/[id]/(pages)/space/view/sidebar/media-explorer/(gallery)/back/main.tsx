import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { ContextForSpaceSpace } from '../../../../../controller/main';

export function SpaceSpaceGalleryCollectionsBack() {
  const {
    actions: { goToHome },
  } = useContext(ContextForSpaceSpace);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-500'
          onClick={() => {
            goToHome();
          }}
        >
          Back to Home
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
