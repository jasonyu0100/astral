import { ContextForGalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function JournalRecordSidebarEntry({
  onClick,
}: {
  onClick?: () => void;
}) {
  const collection = useContext(ContextForGalleryCollectionObj);
  return (
    <GlassWindowFrame
      name={JournalRecordSidebarEntry.name}
      borderFx={borderFx['border-around']}
      className='p-[1rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents
        className='flex cursor-pointer flex-row'
        onClick={onClick}
      >
        <div className='flex flex-col'>
          <p className='text-lg font-bold text-slate-300'>Journal Entry</p>
          <p className='font-bold text-slate-300'>{collection.title}</p>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
