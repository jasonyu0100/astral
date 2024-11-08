import { GlassAreaContainer } from '@/components/glass/area/main';
import { HomePersonalTableGrid } from './grid/main';
import { HomePersonalTableHeader } from './header/main';

export function HomePersonalTable() {
  return (
    <GlassAreaContainer
      sizeFx='flex-grow'
      name={HomePersonalTable.name}
      className={`divide-y-[1px] divide-slate-500 divide-opacity-30 overflow-auto`}
    >
      <div className='flex w-full flex-col'>
        <HomePersonalTableHeader />
        <HomePersonalTableGrid />
      </div>
    </GlassAreaContainer>
  );
}
