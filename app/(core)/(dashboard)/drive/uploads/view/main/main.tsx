import { GlassAreaContainer } from '@/components/glass/area/main';
import { DriveUploadsDailyCore } from './core/main';
import { DriveUploadsDailyHeader } from './header/main';

export function DriveUploadsDailyMain() {
  return (
    <GlassAreaContainer
      name={DriveUploadsDailyMain.name}
      sizeFx='h-full flex-grow '
      className='flex flex-col'
    >
      <DriveUploadsDailyHeader />
      <DriveUploadsDailyCore />
    </GlassAreaContainer>
  );
}
