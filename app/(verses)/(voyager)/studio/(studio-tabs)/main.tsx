import { TabThree } from './tab-3/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';
import { Tabs } from '../../../(common)/tabs/main';
import { TabsRow } from '../../../(common)/tabs/tabs-row/main';

export enum SpaceTabStages {
  Now = 'Now',
  Then = 'Then',
  All = 'All',
}

interface SpacesTabProps {
  tab?: string;
}

export function SpacesTabs({ tab }: SpacesTabProps) {
  return (
    <Tabs>
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} />
        <TabThree tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
