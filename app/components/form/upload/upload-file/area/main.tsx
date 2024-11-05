import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { UploadFileAreaPlaceholder } from './placeholder/main';
import { UploadFileAreaInterface } from './upload/main';

export function UploadFileArea() {
  return (
    <GlassWindowFrame
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
      className='min-w-[500px] p-[1rem]'
    >
      <GlassWindowContents>
        <UploadFileAreaInterface />
        <UploadFileAreaPlaceholder />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
