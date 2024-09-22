import { TabsContainer } from '@/ui/tabs/main';
import { TabsRow } from '@/ui/tabs/tabs-row/main';
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
    <TabsContainer>
      <TabsRow>
        <TabOne tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
