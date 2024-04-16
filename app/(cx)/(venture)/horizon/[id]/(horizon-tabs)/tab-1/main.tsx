'use client';

import { Tab } from '@/(components)/(cx)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/(components)/(cx)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/(components)/(cx)/tabs/tabs-row/tab/text/main';
import { horizonMap } from '../../map';
import { ReleaseContext } from '../../layout';
import { useContext } from 'react';
import { ReleaseTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const releaseContext = useContext(ReleaseContext);
  const tabText = ReleaseTabStage.Forum;
  const active = tab === tabText;

  return (
    <Tab href={horizonMap.horizon.id.forum.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
