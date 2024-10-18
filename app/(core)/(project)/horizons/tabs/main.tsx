import { TabsContainer } from '@/ui/tabs/main';
import { TabsRow } from '@/ui/tabs/tabs-row/main';
import { TabField } from './field-tab/main';
import { TabHorizon } from './horizon-tab/main';
import { TabPoint } from './point-tab/main';
import { TabArc } from './tab-arc/main';

interface HorizonTabProps {
  tab?: string;
}

export enum HorizonTabStage {
  Horizon = 'Horizon',
  Arc = 'Arc',
  Field = 'Field',
  Point = 'Point',
}

export function HorizonTabs({ tab }: HorizonTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabHorizon tab={tab} />
        <TabArc tab={tab} />
        <TabField tab={tab} />
        <TabPoint tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
