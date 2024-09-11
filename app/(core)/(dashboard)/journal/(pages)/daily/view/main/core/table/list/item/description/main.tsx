import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function JournalDailyTableListItemDescription() {
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <div className='col-span-2 p-[1rem]'>
      <GlassWindowFrame
        className='w-full p-[1rem]'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents className='h-full w-full p-[1rem] text-center text-lg font-light text-slate-300'>
          {resource.description || 'No description'}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
