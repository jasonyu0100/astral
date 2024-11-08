import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { UploadsDailySidebarList } from './list/main';
import { UploadsDailySidebarSearch } from './search/main';

export function UploadsDailySidebar() {
  return (
    <GlassAreaContainer
      name={UploadsDailySidebar.name}
      sizeFx='w-[360px] h-full overflow-hidden'
      className={`flex flex-col`}
      glassFx={glassFx['glass-10']}
    >
      <UploadsDailySidebarSearch />
      <UploadsDailySidebarList />
    </GlassAreaContainer>
  );
}
