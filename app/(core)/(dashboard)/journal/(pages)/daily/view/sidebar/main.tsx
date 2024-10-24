import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { JournalDailySidebarList } from './list/main';
import { JournalDailySidebarSearch } from './search/main';

export function JournalDailySidebar() {
  return (
    <GlassAreaContainer
      name={JournalDailySidebar.name}
      sizeFx='w-[360px] h-full overflow-hidden'
      className={`flex flex-col`}
      glassFx={glassFx['glass-10']}
    >
      <JournalDailySidebarSearch />
      <JournalDailySidebarList />
    </GlassAreaContainer>
  );
}
