'use client';

import { Tab } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/main';
import { TabText } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/text/main';
import { TabGreenShard } from '@/(core)/(dashboard)/common/tabs/tabs-row/tab/shard/green/main';
import { useContext } from 'react';
import { ContextForHorizon } from '../../layout';
import { horizonsMap } from '../../map';
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
