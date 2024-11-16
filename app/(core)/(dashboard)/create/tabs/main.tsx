import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabFlow } from './flow-tab/main';
import { TabSpaces } from './spaces-tab/main';

export enum CreateTabStages {
  Spaces = 'Spaces',
  Flow = 'Flow',
}

interface CreateTabProps {
  tab?: string;
}

export function CreateTabs({ tab }: CreateTabProps) {
  return (
    <TabsContainer>
      <TabsRow>
        <TabSpaces tab={tab} />
        <TabFlow tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
