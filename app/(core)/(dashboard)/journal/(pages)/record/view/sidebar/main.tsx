import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { JournalRecordSidebarList } from './list/main';
import { JournalRecordSidebarSearch } from './search/main';

export function JournalRecordSidebar() {
  return (
    <GlassAreaContainer
      name={JournalRecordSidebar.name}
      sizeFx='w-[360px] h-full overflow-hidden'
      className={`flex flex-col`}
      glassFx={glassFx['glass-10']}
    >
      <JournalRecordSidebarSearch />
      <JournalRecordSidebarList />
    </GlassAreaContainer>
  );
}
