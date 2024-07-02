import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceVersesContentComments } from './comments/main';
import { SpaceVersesVerseMain } from './main/main';

export function SpaceVersesContentsVerse() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceVersesContentsVerse.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto p-[2rem]`}
      >
        <div className='flex h-full flex-grow flex-col items-center space-y-[2rem]'>
          <SpaceVersesVerseMain />
          <div className='h-screen w-[800px] flex-shrink-0'>
            <SpaceVersesContentComments />
          </div>
        </div>
      </GlassAreaContainer>
    </div>
  );
}
