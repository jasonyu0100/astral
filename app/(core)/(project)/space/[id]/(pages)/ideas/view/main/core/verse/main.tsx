import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { SpaceIdeasContentComments } from './comments/main';
import { SpaceIdeasVerseMain } from './main/main';

export function SpaceIdeasContentsVerse() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceIdeasContentsVerse.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto p-[2rem]`}
      >
        <div className='flex h-full flex-grow flex-col space-y-[2rem]'>
          <SpaceIdeasVerseMain />
          <HorizontalDivider />
          <div className='h-screen w-full flex-shrink-0'>
            <SpaceIdeasContentComments />
          </div>
        </div>
      </GlassAreaContainer>
    </div>
  );
}
