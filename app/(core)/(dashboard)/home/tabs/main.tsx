import { TabsContainer } from '@/components/tabs/main';
import { TabsRow } from '@/components/tabs/tabs-row/main';
import { TabFlow } from './flow-tab/main';
import { TabSpaces } from './spaces-tab/main';

export enum CreateTabStages {
  Create = 'Create',
  Flow = 'Flow',
}

interface CreateTabProps {
  tab?: string;
}

export function CreateTabs({ tab }: CreateTabProps) {
  return (
    <TabsContainer padding>
      <TabsRow>
        <TabSpaces tab={tab} />
        <TabFlow tab={tab} />
      </TabsRow>
    </TabsContainer>
  );
}
