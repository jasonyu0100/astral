import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
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
          <p className='text-lg font-bold text-slate-700'>Journal Entry</p>
          <p className='font-bold text-slate-700'>{collection.title}</p>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
