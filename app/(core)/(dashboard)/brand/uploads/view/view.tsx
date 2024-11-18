import { BrandUploadsDailyContainer } from './container/main';
import { BrandUploadsDailyMain } from './main/main';
import { BrandUploadsDailySidebar } from './sidebar/main';

export function BrandUploadsDailyView() {
  return (
    <BrandUploadsDailyContainer>
      <BrandUploadsDailyMain />
      <BrandUploadsDailySidebar />
    </BrandUploadsDailyContainer>
  );
}
