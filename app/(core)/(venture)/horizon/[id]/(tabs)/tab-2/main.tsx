'use client';

import { Tab } from '@/(components)/(core)/tabs/tabs-row/tab/main';
import { TabGreenShard } from '@/(components)/(core)/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '@/(components)/(core)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ReleaseContext } from '../../layout';
import { horizonMap } from '../../map';
import { ReleaseTabStage } from '../main';

export function TabTwo({ tab }: { tab?: string }) {
  const releaseContext = useContext(ReleaseContext);
  const tabText = ReleaseTabStage.Map;
  const active = tab === tabText;

  return (
    <Tab href={horizonMap.horizon.id.map.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
