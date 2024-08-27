import { GlassAreaContainer } from '@/ui/glass/area/main';
import { CreativeNetworkSearch } from './search/main';
import { CreativeNetworkTable } from './table/main';

export function CreativeNetworkMain() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col overflow-hidden'
    >
      <CreativeNetworkSearch />
      <CreativeNetworkTable />
    </GlassAreaContainer>
  );
}
