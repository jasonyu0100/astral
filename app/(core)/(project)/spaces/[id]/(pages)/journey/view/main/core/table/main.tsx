import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesJourneyTableHeader } from './header/main';
import { SpacesJourneyTableList } from './list/main';

export function SpacesJourneyWayTable() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpacesJourneyWayTable.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex w-full flex-col items-center justify-center p-[2rem]'>
          <SpacesJourneyTableHeader />
          <SpacesJourneyTableList />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
