import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function JournalRecordTableListItemTitle() {
  const resource = useContext(ContextForCollectionResourceObj);
  return (
    <div className='p-[1rem]'>
      <GlassWindowFrame
        className='w-full p-[1rem]'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents className='h-full w-full p-[1rem] text-center text-lg font-light text-slate-300'>
          {resource.title || 'Untitled'}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
