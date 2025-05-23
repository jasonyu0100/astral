'use client';

import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabGreenShard } from '@/components/tabs/tabs-row/tab/shard/green/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativePrivateSpacesContext } from '../../[id]/layout';
import { spacesMap } from '../../[id]/map';
import { SpaceTabStage } from '../main';

export function SpaceTabFocus({ tab }: { tab?: string }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceContext = useContext(CreativePrivateSpacesContext);
  const tabText = SpaceTabStage.Focus;
  const active = tab === tabText;

  // Safely check if the necessary context values are available
  const spaceId = spaceContext?.spaceId;
  const chapterId = chapterListController?.state?.objId;

  // Construct the URL only if spaceId is available
  const url = spaceId
    ? `${spacesMap.spaces.id.focus.link(spaceId)}?chapter=${chapterId ?? ''}`
    : '#'; // Fallback URL if spaceId is not defined

  return (
    <Tab href={url}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}
