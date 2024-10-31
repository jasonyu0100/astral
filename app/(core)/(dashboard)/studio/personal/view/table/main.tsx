import { GlassAreaContainer } from '@/components/glass/area/main';
import { StudioPersonalTableHeader } from './header/main';
import { StudioPersonalTableResults } from './results/main';

export function StudioPersonalTable() {
  return (
    <GlassAreaContainer
      sizeFx='flex-grow'
      name={StudioPersonalTable.name}
      className={`divide-y-[1px] divide-slate-500 divide-opacity-30 overflow-auto`}
    >
      <div className='flex w-full flex-col'>
        <StudioPersonalTableHeader />
        <StudioPersonalTableResults />
      </div>
    </GlassAreaContainer>
  );
}
