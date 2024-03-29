import { TabTwo } from './tab-2/main';
import { TabOne } from './tab-1/main';
import { TabThree } from './tab-3/main';
import { Tabs } from '../../../../(components)/(cx)/tabs/main';
import { TabsRow } from '../../../../(components)/(cx)/tabs/tabs-row/main';
import { TabsBackButton } from '@/(components)/(cx)/tabs/tabs-row/back-button/main';
import { studioMap } from '../../studio/map';
import { ventureMap } from '../../venture/map';

export enum ArtistTabStage {
  Network = 'Network',
  Stars = 'Stars',
  Fans = 'Fans',
}
interface ArtistTabProps {
  tab?: string;
}

export function ArtistTabs({ tab }: ArtistTabProps) {
  return (
    <Tabs>
      <TabsBackButton href={ventureMap.venture.horizons.link} />
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} />
        <TabThree tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
