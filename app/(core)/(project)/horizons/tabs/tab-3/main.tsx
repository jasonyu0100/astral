'use client';

import { Tab } from '@/ui/tabs/tabs-row/tab/main';
import { TabGreenShard } from '@/ui/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '@/ui/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForHorizon } from '../../[id]/layout';
import { horizonsMap } from '../../[id]/map';
import { HorizonTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
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
