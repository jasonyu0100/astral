import { borderFx, glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { UploadFileAreaPlaceholder } from './placeholder/main';
import { UploadFileAreaInterface } from './upload/main';

export function UploadFileArea() {
  return (
    <GlassWindowFrame borderFx={borderFx['border-around']}>
      <GlassWindowContents className='p-[1rem]'>
        <UploadFileAreaInterface />
        <UploadFileAreaPlaceholder />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
