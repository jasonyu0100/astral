import { TabThree } from './tab-3/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';
import { Tabs } from '../../../../(components)/(core)/tabs/main';
import { TabsRow } from '../../../../(components)/(core)/tabs/tabs-row/main';

export enum SpaceTabStages {
  Spaces = 'Spaces',
  Two = 'Two',
  Three = 'Three',
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
