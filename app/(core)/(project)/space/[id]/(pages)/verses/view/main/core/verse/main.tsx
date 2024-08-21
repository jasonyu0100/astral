import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceVersesContentComments } from './comments/main';
import { SpaceVersesVerseMain } from './main/main';

export function SpaceVersesContentsVerse() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceVersesContentsVerse.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto px-[2rem]`}
      >
        <div className='flex flex-grow flex-col space-y-[4rem] pt-[2rem]'>
          <SpaceVersesVerseMain />
          <SpaceVersesContentComments />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
