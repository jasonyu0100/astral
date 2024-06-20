import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceFlowCore } from '../../../../flow/view/main/core/main';
import { SpaceSeaCardEdit } from './edit/main';

export function SpaceSeaCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceFlowCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex h-full w-full flex-col justify-center space-y-[2rem] p-[4rem]'>
          <SpaceSeaCardEdit />
          {/* <SpaceSeaWorkCards /> */}
        </div>
      </GlassAreaContainer>
    </div>
  );
}
