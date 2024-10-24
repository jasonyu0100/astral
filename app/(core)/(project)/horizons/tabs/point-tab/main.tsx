'use client';

import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/components/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForHorizon } from '../../[id]/layout';
import { horizonsMap } from '../../[id]/map';
import { HorizonTabStage } from '../main';

export function TabPoint({ tab }: { tab?: string }) {
  const releaseContext = useContext(ContextForHorizon);
  const tabText = HorizonTabStage.Point;
  const active = tab === tabText;

  return (
    <Tab href={horizonsMap.horizons.id.point.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
