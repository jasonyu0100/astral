import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceSessionCardEdit } from './edit/main';

export function SpaceSessionCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceSessionCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex h-full w-full flex-col justify-center space-y-[2rem] p-[2rem]'>
          <SpaceSessionCardEdit />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
