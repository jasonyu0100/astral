import { GlassAreaContainer } from '@/ui/glass/area/main';
import { NetworkCreativeSearch } from './search/main';
import { NetworkCreativeTable } from './table/main';

export function NetworkCreativeMain() {
  return (
    <GlassAreaContainer
      name={NetworkCreativeMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col overflow-hidden'
    >
      <NetworkCreativeSearch />
      <NetworkCreativeTable />
    </GlassAreaContainer>
  );
}
