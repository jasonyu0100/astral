import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceMapSidebarContext } from '../../../../main';

export function SpaceMapGalleryThumbnail({
  children,
}: {
  children: React.ReactNode;
}) {
  const gallery = useContext(ContextForGalleryObj);
  const sidebarController = useContext(SpaceMapSidebarContext);

  return (
    <GlassWindowFrame
      className='w-full flex-shrink-0 p-[2rem]'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents
        onClick={() => sidebarController.actions.goToGallery(gallery)}
        className='flex w-full cursor-pointer flex-col space-y-[1rem]'
      >
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
