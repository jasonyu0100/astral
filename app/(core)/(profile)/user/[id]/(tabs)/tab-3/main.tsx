'use client';

import { Tab } from '@/ui/(dashboard)/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/ui/(dashboard)/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/ui/(dashboard)/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { ContextForProfile } from '../../layout';
import { userProfileMap } from '../../map';
import { UserTabStage } from '../main';

export function TabThree({ tab }: { tab?: string }) {
  const userContext = useContext(ContextForProfile);
  const tabText = UserTabStage.Spaces;
  const active = tab === tabText;

  return (
    <Tab href={userProfileMap.horizons.link(userContext.userId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
