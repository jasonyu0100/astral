import { DraftMain } from './draft-epic/main';
import { DraftPage } from './draft-epic/page/main';
import { DraftSidebar } from './draft-epic/sidebar/main';
import { DraftContainer } from './draft-epic/container/main';
import { DraftHeader } from './draft-epic/page/header/main';
import { DraftChapters } from './draft-epic/chapters/main';
import { DraftModalView } from '../../../../../(modals)/draft-modal/view';
import { DraftBody } from './draft-epic/page/body/main';
import { StarModalView } from '@/(cosmos)/(modals)/star-modal/view';

export function DraftView() {
  return (
    <DraftContainer>
      <StarModalView />
      <DraftModalView />
      <DraftMain>
        <DraftPage>
          <DraftHeader />
          <DraftBody/>
        </DraftPage>
        <DraftChapters/>
      </DraftMain>
      <DraftSidebar />
    </DraftContainer>
  );
}
