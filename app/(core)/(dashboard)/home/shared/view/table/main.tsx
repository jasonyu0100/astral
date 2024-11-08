import { GlassAreaContainer } from '@/components/glass/area/main';
import { HomeSharedTableHeader } from './header/main';
import { HomeSharedTableResults } from './results/main';

export function HomeSharedTable() {
  return (
    <GlassAreaContainer
      sizeFx='flex-grow'
      name={HomeSharedTable.name}
      className={`divide-y-[1px] divide-slate-500 divide-opacity-30 overflow-auto`}
    >
      <div className='flex w-full flex-col'>
        <HomeSharedTableHeader />
        <HomeSharedTableResults />
      </div>
    </GlassAreaContainer>
  );
}
