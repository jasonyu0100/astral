import { DraftMain } from './draft-epic/main';
import { DraftSidebar } from './draft-epic/sidebar/main';
import { DraftContainer } from './draft-epic/container/main';
import { DraftModalView } from '../../../../../(modals)/draft-modal/view';
import { StarModalView } from '@/(cosmos)/(modals)/star-modal/view';

export function DraftView() {
  return (
    <DraftContainer>
      <StarModalView />
      <DraftModalView />
      <DraftMain/>
      <DraftSidebar />
    </DraftContainer>
  );
}
