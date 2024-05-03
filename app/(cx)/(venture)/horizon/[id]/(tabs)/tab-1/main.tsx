'use client';

import { Tab } from '@/(lib)/(core)/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/(lib)/(core)/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/(lib)/(core)/tabs/tabs-row/tab/text/main';
import { horizonMap } from '../../map';
import { ReleaseContext } from '../../layout';
import { useContext } from 'react';
import { ReleaseTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const releaseContext = useContext(ReleaseContext);
  const tabText = ReleaseTabStage.Field;
  const active = tab === tabText;

  return (
    <Tab href={horizonMap.horizon.id.field.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
