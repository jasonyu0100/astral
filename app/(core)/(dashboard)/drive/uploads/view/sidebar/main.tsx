import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { DriveUploadsDailySidebarList } from './list/main';
import { DriveUploadsDailySidebarSearch } from './search/main';

export function DriveUploadsDailySidebar() {
  return (
    <GlassAreaContainer
      name={DriveUploadsDailySidebar.name}
      sizeFx='w-[360px] h-full overflow-hidden'
      className={`flex flex-col`}
      glassFx={glassFx['glass-10']}
    >
      <DriveUploadsDailySidebarSearch />
      <DriveUploadsDailySidebarList />
    </GlassAreaContainer>
  );
}
