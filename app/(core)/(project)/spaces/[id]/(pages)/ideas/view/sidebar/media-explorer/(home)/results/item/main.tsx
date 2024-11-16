import { ContextForGalleryObj } from '@/architecture/model/gallery/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesIdeas } from '../../../../../../controller/main';

export function SpacesIdeasGalleryItem() {
  const gallery = useContext(ContextForGalleryObj);
  const spacesSpaceController = useContext(ContextForSpacesIdeas);
  const hoverableController = useControllerForHoverable();

  return (
    <div
      className='w-full'
      onMouseEnter={() => hoverableController.onHover()}
      onMouseLeave={() => hoverableController.onUnhover()}
    >
      <GlassWindowFrame
        className='h-[4rem] w-full flex-shrink-0'
        roundedFx={roundedFx['rounded-t']}
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents
          onClick={() => spacesSpaceController.actions.goToGallery(gallery)}
          className='relative h-full w-full cursor-pointer'
        >
          <div className='absolute flex h-full w-full flex-col p-[1rem]'>
            <p className='text-md w-full font-bold text-slate-300'>
              {gallery.title?.trim() || 'Untitled'}
            </p>
          </div>
        </GlassWindowContents>
        {hoverableController.hovered && (
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
