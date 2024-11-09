import { DriveUploadsDailyContainer } from './container/main';
import { DriveUploadsDailyMain } from './main/main';
import { DriveUploadsDailySidebar } from './sidebar/main';

export function DriveUploadsDailyView() {
  return (
    <DriveUploadsDailyContainer>
      <DriveUploadsDailyMain />
      <DriveUploadsDailySidebar />
    </DriveUploadsDailyContainer>
  );
}
