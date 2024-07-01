import { SpaceVersesContainer } from './container/main';
import { SpaceVersesMain } from './main/main';
import { SpaceVersesSidebar } from './sidebar/main';

export function SpaceVersesView() {
  return (
    <SpaceVersesContainer>
      <SpaceVersesMain />
      <SpaceVersesSidebar />
    </SpaceVersesContainer>
  );
}
