import { TabsContainer } from '@/ui/tabs/main';
import { TabsRow } from '@/ui/tabs/tabs-row/main';
import { TabOne } from './tab-1/main';
import { TabThree } from './tab-2/main';
import { TabTwo } from './tab-3/main';
import { TabFour } from './tab-4/main';

interface HorizonTabProps {
  tab?: string;
}

export enum HorizonTabStage {
  Horizon = 'Horizon',
  Arc = 'Arc',
  Board = 'Board',
  Point = 'Point',
}

export function HorizonTabs({ tab }: HorizonTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabOne tab={tab} />
        <TabTwo tab={tab} />
        <TabThree tab={tab} />
        <TabFour tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
