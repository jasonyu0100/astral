import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
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
        <div className='flex h-full flex-grow flex-col items-center space-y-[2rem] px-[8rem]'>
          <SpaceVersesVerseMain />
          <HorizontalDivider />
          <SpaceVersesContentComments />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
