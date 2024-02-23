'use client';

import { Tab } from '@/(components)/cx/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/(components)/cx/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/(components)/cx/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ReleaseContext } from '../../layout';
import { releaseMap } from '../../map';
import { ReleaseTabStage } from '../main';

export function TabFour({ tab }: { tab?: string }) {
  const releaseContext = useContext(ReleaseContext);
  const tabText = ReleaseTabStage.Four;
  const active = tab === tabText;

  return (
    <Tab href={releaseMap.release.id.four.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
