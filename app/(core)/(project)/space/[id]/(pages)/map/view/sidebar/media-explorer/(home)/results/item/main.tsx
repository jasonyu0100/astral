import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../../controller/map/main';

export function SpaceMapGalleryItem() {
  const gallery = useContext(ContextForGalleryObj);
  const {
    actions: { goToGallery },
  } = useContext(ContextForSpaceMap);
  const loggedInUser = useGlobalUser((state) => state.user);

  return (
    <GlassWindowFrame
      className='aspect-video w-full flex-shrink-0'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents
        onClick={() => goToGallery(gallery)}
        className='relative h-full w-full cursor-pointer'
      >
        <div className='absolute flex h-full w-full flex-col p-[1rem]'>
          <p className='text-md w-full font-bold text-slate-300'>
            {gallery.title || 'Untitled'}
          </p>
          <div className='mt-[1rem] text-sm font-normal text-slate-500'>
            {loggedInUser?.fname} {loggedInUser?.lname}
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
