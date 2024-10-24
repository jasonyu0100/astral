import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesBoardTableHeader } from './header/main';
import { SpacesBoardTableList } from './list/main';

export function SpacesBoardWayTable() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpacesBoardWayTable.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex w-full flex-col items-center justify-center p-[2rem]'>
          <SpacesBoardTableHeader />
          <SpacesBoardTableList />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
