import { SpaceVerseContainer } from './container/main';
import { SpaceVerseMain } from './main/main';
import { SpaceVerseSidebar } from './sidebar/main';

export function SpaceVerseView() {
  return (
    <SpaceVerseContainer>
      <SpaceVerseMain />
      <SpaceVerseSidebar />
    </SpaceVerseContainer>
  );
}
