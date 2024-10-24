'use client';

import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForHorizon } from '../../[id]/layout';
import { horizonsMap } from '../../[id]/map';
import { HorizonTabStage } from '../main';

export function TabHorizon({ tab }: { tab?: string }) {
  const releaseContext = useContext(ContextForHorizon);
  const tabText = HorizonTabStage.Horizon;
  const active = tab === tabText;

  return (
    <Tab href={horizonsMap.horizons.id.horizon.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
