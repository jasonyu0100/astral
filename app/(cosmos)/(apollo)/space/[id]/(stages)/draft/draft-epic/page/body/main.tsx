import { DraftLinks } from '../constellation/links/main';
import { DraftConstellation } from '../constellation/main';
import { DraftConstellationStars } from '../constellation/stars/main';
import { DraftPanelHeader } from '../panel/header/main';
import { DraftPanelList } from '../panel/list/main';
import { DraftPanel } from '../panel/main';

export function DraftBody() {
  return (
    <div style={{ width: '100%', height: '100%' }} className='flex flex-row'>
      <DraftPanel>
        <DraftPanelHeader />
        <DraftPanelList />
      </DraftPanel>
      <DraftConstellation>
        <DraftLinks />
        <DraftConstellationStars />
      </DraftConstellation>
    </div>
  );
}
