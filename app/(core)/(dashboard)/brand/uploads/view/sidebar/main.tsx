import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { BrandUploadsDailySidebarList } from './list/main';
import { BrandUploadsDailySidebarSearch } from './search/main';

export function BrandUploadsDailySidebar() {
  return (
    <GlassAreaContainer
      name={BrandUploadsDailySidebar.name}
      sizeFx='w-[360px] h-full overflow-hidden'
      className={`flex flex-col`}
      glassFx={glassFx['glass-10']}
    >
      <BrandUploadsDailySidebarSearch />
      <BrandUploadsDailySidebarList />
    </GlassAreaContainer>
  );
}
