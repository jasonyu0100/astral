import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../controller/main';

export function SpaceMapGalleryCollectionsBack() {
  const {
    actions: { goToHome },
  } = useContext(ContextForSpaceMap);

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
