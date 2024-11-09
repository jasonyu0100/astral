'use client';

import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/components/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativePrivateSpacesContext } from '../../[id]/layout';
import { spacesMap } from '../../[id]/map';
import { SpaceTabStage } from '../main';

export function SpacesTabLive({ tab }: { tab?: string }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spaceContext = useContext(CreativePrivateSpacesContext);
  const tabText = SpaceTabStage.Live;
  const active = tab === tabText;

  const spaceId = spaceContext?.spaceId;
  const chapterId = chapterListController?.state?.objId;
  const postId = postListController?.state?.objId;

  // Construct the URL only if spaceId is available
  const url = spaceId
    ? `${spacesMap.spaces.id.live.link(spaceId)}?chapter=${chapterId ?? ''}&post=${postId ?? ''}`
    : '#'; // Fallback URL if spaceId is not defined

  return (
    <Tab href={url}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
