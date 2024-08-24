import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForSpaceMapSidebar } from '../../../../../../page';

export function SpaceMapGalleryThumbnail() {
  const gallery = useContext(ContextForGalleryObj);
  const sidebarController = useContext(ContextForSpaceMapSidebar);
  const loggedInUser = useGlobalUser((state) => state.user);

  return (
    <GlassWindowFrame
      className='aspect-[5/3] w-full flex-shrink-0'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents
        onClick={() => sidebarController.actions.goToGallery(gallery)}
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
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
