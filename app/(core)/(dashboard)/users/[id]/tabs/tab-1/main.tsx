'use client';

import { Tab } from '@/ui/tabs/tabs-row/tab/main';
import { TabBlueShard } from '@/ui/tabs/tabs-row/tab/shard/blue/main';
import { TabText } from '@/ui/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForProfileId } from '../../layout';
import { userProfileMap } from '../../map';
import { UserTabStage } from '../main';

export function TabOne({ tab }: { tab?: string }) {
  const userContext = useContext(ContextForProfileId);
  const tabText = UserTabStage.Profile;
  const active = tab === tabText;

  return (
    <Tab href={userProfileMap.profile.link(userContext.userId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}
