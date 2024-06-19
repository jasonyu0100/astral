import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { SpaceFlowCore } from '../../../../flow/view/main/core/main';
import { SpaceSeaAddedCards } from './cards/list/added/main';
import { SpaceSeaWorkCards } from './cards/list/work/main';
import { SpaceSeaCardEdit } from './edit/main';

export function SpaceSeaCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceFlowCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex h-full w-full flex-col space-y-[2rem] p-[2rem]'>
          <SpaceSeaCardEdit />
          <HorizontalDivider />
          <p className='text-xl font-bold text-slate-300'>Work</p>
          <SpaceSeaWorkCards />
          <HorizontalDivider />
          <p className='text-xl font-bold text-slate-300'>Added</p>
          <SpaceSeaAddedCards />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
