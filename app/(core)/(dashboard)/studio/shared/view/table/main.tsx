import { GlassAreaContainer } from '@/components/glass/area/main';
import { StudioSharedTableHeader } from './header/main';
import { StudioSharedTableResults } from './results/main';

export function StudioSharedTable() {
  return (
    <GlassAreaContainer
      sizeFx='flex-grow'
      name={StudioSharedTable.name}
      className={`divide-y-[1px] divide-slate-500 divide-opacity-30 overflow-auto`}
    >
      <div className='flex w-full flex-col'>
        <StudioSharedTableHeader />
        <StudioSharedTableResults />
      </div>
    </GlassAreaContainer>
  );
}
