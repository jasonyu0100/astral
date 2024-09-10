import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { getFormattedAMPM } from '@/utils/dateFormat';
import { useContext } from 'react';

export function JournalRecordSidebarListItem() {
  const collectionObj = useContext(ContextForGalleryCollectionObj);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const hoverableController = useControllerForHoverable();

  return (
    <div
      onMouseOver={() => hoverableController.onHover()}
      onMouseOut={() => hoverableController.onUnhover()}
    >
      <GlassWindowFrame className='w-full' borderFx={borderFx['border-b']}>
        <GlassWindowContents
          className='h-full w-full cursor-pointer'
          onClick={() =>
            collectionListController.actions.stateActions.select(collectionObj)
          }
        >
          <p className='text-bold whitespace-nowrap p-[1rem] text-xl text-slate-300'>
            {getFormattedAMPM(new Date(collectionObj.created))} {' - '}
            {collectionObj.title || 'untitled'}{' '}
          </p>
        </GlassWindowContents>
        {hoverableController.hovered && (
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
