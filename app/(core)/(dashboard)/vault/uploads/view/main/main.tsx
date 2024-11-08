import { GlassAreaContainer } from '@/components/glass/area/main';
import { UploadsDailyCore } from './core/main';
import { UploadsDailyHeader } from './header/main';

export function UploadsDailyMain() {
  return (
    <GlassAreaContainer
      name={UploadsDailyMain.name}
      sizeFx='h-full flex-grow '
      className='flex flex-col'
    >
      <UploadsDailyHeader />
      <UploadsDailyCore />
    </GlassAreaContainer>
  );
}
