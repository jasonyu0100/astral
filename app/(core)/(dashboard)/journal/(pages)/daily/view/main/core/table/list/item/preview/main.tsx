import { ElementResourcePreview } from '@/ui/element/resource/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function JournalDailyTableListItemPreview() {
  return (
    <div className='col-span-2 flex flex-row justify-items-start'>
      <GlassWindowFrame className='h-full'>
        <GlassWindowContents className='flex flex-col'>
          <ElementResourcePreview />
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
