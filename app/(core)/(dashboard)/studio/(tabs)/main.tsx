import { Tabs } from '../../../../(components)/(dashboard)/tabs/main';
import { TabsRow } from '../../../../(components)/(dashboard)/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';

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
      </TabsRow>
    </Tabs>
  );
}
