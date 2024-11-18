import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabTwo } from './tab-2/main';

export enum DriveTabStage {
  Uploads = 'Uploads',
  Manage = 'Manage',
}
interface DriveTabsInput {
  tab?: string;
}

export function DriveTabs({ tab }: DriveTabsInput) {
  return (
    <TabsContainer padding>
      <TabsRow>
        <TabTwo tab={tab} />
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
