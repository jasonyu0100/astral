import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function DriveUploadsDailySidebarListItem() {
  const collectionObj = useContext(ContextForGalleryCollectionObj);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const hoverableController = useControllerForHoverable();
  const active = collectionListController.state.objId === collectionObj.id;

  return (
    <div
      onMouseOver={() => hoverableController.onHover()}
      onMouseOut={() => hoverableController.onUnhover()}
    >
      <GlassWindowFrame
        className='w-full'
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx['rounded']}
      >
        <GlassWindowContents
          className='h-full w-full cursor-pointer'
          onClick={() =>
            collectionListController.actions.stateActions.select(collectionObj)
          }
        >
          <p className='text-md whitespace-nowrap p-[1rem] text-lg font-bold text-slate-300'>
            {collectionObj.title?.trim() || 'Untitled'}
          </p>
        </GlassWindowContents>
        {hoverableController.hovered || active ? (
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        ) : (
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
