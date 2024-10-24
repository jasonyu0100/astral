'use client';

import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabGreenShard } from '@/components/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForHorizon } from '../../[id]/layout';
import { horizonsMap } from '../../[id]/map';
import { HorizonTabStage } from '../main';

export function TabArc({ tab }: { tab?: string }) {
  const releaseContext = useContext(ContextForHorizon);
  const tabText = HorizonTabStage.Arc;
  const active = tab === tabText;

  return (
    <Tab href={horizonsMap.horizons.id.arc.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
