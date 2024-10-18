'use client';

import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { Tab } from '@/ui/tabs/tabs-row/tab/main';
import { TabOrangeShard } from '@/ui/tabs/tabs-row/tab/shard/orange/main';
import { TabText } from '@/ui/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../[id]/layout';
import { spacesMap } from '../../[id]/map';
import { SpaceTabStage } from '../main';

export function SpaceTabBoard({ tab }: { tab?: string }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Board;
  const active = tab === tabText;

  // Safely check if the necessary context values are available
  const spaceId = spaceContext?.spaceId;
  const chapterId = chapterListController?.state?.objId;

  // Construct the URL only if spaceId is available
  const url = spaceId
    ? `${spacesMap.spaces.id.board.link(spaceId)}?chapter=${chapterId ?? ''}`
    : '#'; // Fallback URL if spaceId is not defined

  return (
    <Tab href={url}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}
