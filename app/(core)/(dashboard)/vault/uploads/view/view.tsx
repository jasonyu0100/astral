import { UploadsDailyContainer } from './container/main';
import { UploadsDailyMain } from './main/main';
import { UploadsDailySidebar } from './sidebar/main';

export function UploadsDailyView() {
  return (
    <UploadsDailyContainer>
      <UploadsDailySidebar />
      <UploadsDailyMain />
    </UploadsDailyContainer>
  );
}
