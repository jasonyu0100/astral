import { TabTwo } from './tab-2/main';
import { TabOne } from './tab-1/main';
import { TabThree } from './tab-3/main';
import { Tabs } from '../../../../(components)/cx/tabs/main';
import { TabsRow } from '../../../../(components)/cx/tabs/tabs-row/main';
import { TabsBackButton } from '@/(components)/cx/tabs/tabs-row/back-button/main';
import { studioMap } from '../../studio/map';

export enum ArtistsTabStage {
  Charts = 'Charts',
  Stars = 'Stars',
  Fans = 'Fans',
}
interface ArtistsTabProps {
  tab?: string;
}

export function ArtistsTabs({ tab }: ArtistsTabProps) {
  return (
    <Tabs>
      <TabsBackButton href={studioMap.studio.now.link} />
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
      </TabsRow>
    </Tabs>
  );
}
