'use client';

import { Tab } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/main';
import { TabGreenShard } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/shard/green/main';
import { TabText } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForHorizon } from '../../layout';
import { horizonMap } from '../../map';
import { ReleaseTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const releaseContext = useContext(ContextForHorizon);
  const tabText = ReleaseTabStage.Board;
  const active = tab === tabText;

  return (
    <Tab href={horizonMap.horizon.id.board.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
