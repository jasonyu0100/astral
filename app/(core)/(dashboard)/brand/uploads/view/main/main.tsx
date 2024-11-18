import { GlassAreaContainer } from '@/components/glass/area/main';
import { BrandUploadsDailyCore } from './core/main';
import { BrandUploadsDailyHeader } from './header/main';

export function BrandUploadsDailyMain() {
  return (
    <GlassAreaContainer
      name={BrandUploadsDailyMain.name}
      sizeFx='h-full flex-grow '
      className='flex flex-col'
    >
      <BrandUploadsDailyHeader />
      <BrandUploadsDailyCore />
    </GlassAreaContainer>
  );
}
