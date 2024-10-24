'use client';

import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/components/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForHorizon } from '../../[id]/layout';
import { horizonsMap } from '../../[id]/map';
import { HorizonTabStage } from '../main';

export function TabField({ tab }: { tab?: string }) {
  const releaseContext = useContext(ContextForHorizon);
  const tabText = HorizonTabStage.Field;
  const active = tab === tabText;

  return (
    <Tab href={horizonsMap.horizons.id.field.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
