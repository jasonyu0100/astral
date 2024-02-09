import { SpacesContainer } from './main';
import { SpaceContainer } from './container/main';
import { SpacesModalView } from '../../../(modals)/space-modal/view';

export function SpacesView() {
  return (
    <SpaceContainer>
      <SpacesModalView />
      <SpacesContainer />
    </SpaceContainer>
  );
}
