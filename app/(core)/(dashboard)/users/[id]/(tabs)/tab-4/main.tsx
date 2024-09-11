'use client';

import { Tab } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/(core)/(dashboard)/common//tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForProfile } from '../../layout';
import { userProfileMap } from '../../map';
import { UserTabStage } from '../main';

export function TabFour({ tab }: { tab?: string }) {
  const userContext = useContext(ContextForProfile);
  const tabText = UserTabStage.Horizons;
  const active = tab === tabText;

  return (
    <Tab href={userProfileMap.horizons.link(userContext.userId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
