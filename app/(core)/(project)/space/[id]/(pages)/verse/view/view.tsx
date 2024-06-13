import { VerseMain } from './main/main';
import { VerseSidebar } from './sidebar/main';
import { VerseContainer } from './container/main';

export function VerseView() {
  return (
    <VerseContainer>
      <VerseMain/>
      <VerseSidebar />
    </VerseContainer>
  );
}
