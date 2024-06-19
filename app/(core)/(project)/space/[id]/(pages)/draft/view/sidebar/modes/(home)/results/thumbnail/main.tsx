import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceDraftSidebarContext } from '../../../../main';

export function SpaceDraftGalleryThumbnail() {
  const gallery = useContext(ContextForGalleryObj);
  const sidebarController = useContext(SpaceDraftSidebarContext);

  return (
    <GlassWindowFrame
      className='h-[10rem] w-full flex-shrink-0'
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents
        onClick={() => sidebarController.actions.goToGallery(gallery)}
        className='flex w-full cursor-pointer flex-col space-y-[1rem]'
      >
        <img
          src={gallery.thumbnail.src}
          className='h-full w-full object-cover'
        />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
