'use client';

import { Tab } from '@/(components)/(dashboard)/tabs/tabs-row/tab/main';
import { TabText } from '@/(components)/(dashboard)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ReleaseContext } from '../../layout';
import { horizonMap } from '../../map';
import { ReleaseTabStage } from '../main';
import { TabPurpleShard } from '@/(components)/(dashboard)/tabs/tabs-row/tab/shard/purple/main';

export function TabFour({ tab }: { tab?: string }) {
  const releaseContext = useContext(ReleaseContext);
  const tabText = ReleaseTabStage.Point;
  const active = tab === tabText;

  return (
    <Tab href={horizonMap.horizon.id.point.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
