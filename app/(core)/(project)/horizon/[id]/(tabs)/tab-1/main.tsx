'use client';

import { Tab } from '@/ui/(dashboard)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/ui/(dashboard)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/ui/(dashboard)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForHorizon } from '../../layout';
import { horizonMap } from '../../map';
import { ReleaseTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const releaseContext = useContext(ContextForHorizon);
  const tabText = ReleaseTabStage.Area;
  const active = tab === tabText;

  return (
    <Tab href={horizonMap.horizon.id.area.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
