import { Tabs } from '@/(core)/(dashboard)/common//tabs/main';
import { TabsRow } from '@/(core)/(dashboard)/common//tabs/tabs-row/main';
import { TabOne } from './tab-1/main';

interface UserTabProps {
  tab?: string;
}

export enum UserTabStage {
  Profile = 'Profile',
  Gallerys = 'Gallerys',
  Spaces = 'Spaces',
  Horizons = 'Horizons',
}

export function UserTabs({ tab }: UserTabProps) {
  return (
    <Tabs>
      <TabsRow>
        <TabOne tab={tab} />
        {/* <TabTwo tab={tab} />
        <TabThree tab={tab} />
        <TabFour tab={tab} /> */}
      </TabsRow>
    </Tabs>
  );
}
