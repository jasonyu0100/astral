import { NetworkCreativeTableHeader } from './header/main';
import { NetworkCreativeTableResults } from './results/main';

export function NetworkCreativeTable() {
  return (
    <div className='w-full overflow-auto p-[2rem]'>
      <NetworkCreativeTableHeader />
      <NetworkCreativeTableResults />
    </div>
  );
}
