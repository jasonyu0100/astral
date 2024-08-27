import { GlassAreaContainer } from '@/ui/glass/area/main';
import { StudioSpacesTableHeader } from './header/main';
import { StudioSpacesTableResults } from './results/main';

export function StudioSpacesTable() {
  return (
    <GlassAreaContainer
      sizeFx='flex-grow'
      name={StudioSpacesTable.name}
      className={`divide-y-[1px] divide-slate-500 divide-opacity-30 overflow-auto`}
    >
      <div className='flex w-full flex-col'>
        <StudioSpacesTableHeader />
        <StudioSpacesTableResults />
      </div>
    </GlassAreaContainer>
  );
}
