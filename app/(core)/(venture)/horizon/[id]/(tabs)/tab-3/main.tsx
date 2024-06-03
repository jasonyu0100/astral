'use client';

import { Tab } from '@/(components)/(core)/tabs/tabs-row/tab/main';
import { TabText } from '@/(components)/(core)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ReleaseContext } from '../../layout';
import { horizonMap } from '../../map';
import { ReleaseTabStage } from '../main';
import { TabOrangeShard } from '@/(components)/(core)/tabs/tabs-row/tab/shard/orange/main';

export function TabThree({ tab }: { tab?: string }) {
  const releaseContext = useContext(ReleaseContext);
  const tabText = ReleaseTabStage.Rule;
  const active = tab === tabText;

  return (
    <Tab href={horizonMap.horizon.id.rule.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
