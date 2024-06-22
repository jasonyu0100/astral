import { CreativeNetworkTableHeader } from './header/main';
import { CreativeNetworkTableResults } from './results/main';

export function CreativeNetworkTable() {
  return (
    <div className='w-full overflow-auto p-[2rem]'>
      <CreativeNetworkTableHeader />
      <CreativeNetworkTableResults />
    </div>
  );
}
