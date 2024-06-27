import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceVerseMain } from '../../../main';
import { SpaceVerseDown } from './down/main';
import { SpaceVerseUp } from './up/main';

export function SpaceVerseContentsDisplay() {
  return (
    <GlassAreaContainer
      name={SpaceVerseContentsDisplay.name}
      sizeFx='flex-grow h-full'
      className={`space-y-[3rem] overflow-auto p-[2rem]`}
    >
      <div className='flex h-full w-full flex-grow flex-col items-center justify-between'>
        <SpaceVerseUp />
        <SpaceVerseMain />
        <SpaceVerseDown />
      </div>
    </GlassAreaContainer>
  );
}
