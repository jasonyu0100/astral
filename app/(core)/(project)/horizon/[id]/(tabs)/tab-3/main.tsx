'use client';

import { Tab } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForHorizon } from '../../layout';
import { horizonMap } from '../../map';
import { HorizonTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const releaseContext = useContext(ContextForHorizon);
  const tabText = HorizonTabStage.Arc;
  const active = tab === tabText;

  return (
    <Tab href={horizonMap.horizon.id.arc.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
