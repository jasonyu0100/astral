'use client';

import { ContextForUserPostListFromChapter } from '@/(server)/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { Tab } from '@/ui/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/ui/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/ui/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../[id]/layout';
import { spacesMap } from '../../[id]/map';
import { SpaceTabStage } from '../main';

export function SpacesTabFlight({ tab }: { tab?: string }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Flight;
  const active = tab === tabText;

  const spaceId = spaceContext?.spaceId;
  const chapterId = chapterListController?.state?.objId;
  const postId = postListController?.state?.objId;

  // Construct the URL only if spaceId is available
  const url = spaceId
    ? `${spacesMap.spaces.id.flight.link(spaceId)}?chapter=${chapterId ?? ''}&post=${postId ?? ''}`
    : '#'; // Fallback URL if spaceId is undefined

  return (
    <Tab href={url}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
