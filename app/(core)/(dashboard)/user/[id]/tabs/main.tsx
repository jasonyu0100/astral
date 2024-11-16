import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
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
    <TabsContainer padding>
      <TabsRow>
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
