import { HomePersonalTableGrid } from './grid/main';
import { HomePersonalTableHeader } from './header/main';

export function HomePersonalTable() {
  return (
    <div className='flex w-full flex-col'>
      <HomePersonalTableHeader />
      <HomePersonalTableGrid />
    </div>
  );
}
