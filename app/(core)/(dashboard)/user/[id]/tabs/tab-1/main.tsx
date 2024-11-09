'use client';

import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/components/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForProfileId } from '../../layout';
import { userMap } from '../../map';
import { UserTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const userContext = useContext(ContextForProfileId);
  const tabText = UserTabStage.Profile;
  const active = tab === tabText;

  return (
    <Tab href={userMap.profile.link(userContext.userId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
