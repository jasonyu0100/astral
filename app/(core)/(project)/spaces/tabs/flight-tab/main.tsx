'use client';

import { ContextForUserPostListFromChapter } from '@/(server)/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { Tab } from '@/components/tabs/tabs-row/tab/main';
import { TabPurpleShard } from '@/components/tabs/tabs-row/tab/shard/purple/main';
import { TabText } from '@/components/tabs/tabs-row/tab/text/main';
import { useContext } from 'react';
import { CreativeSpacesContext } from '../../[id]/layout';
import { spacesMap } from '../../[id]/map';
import { SpaceTabStage } from '../main';

export function SpacesTabPost({ tab }: { tab?: string }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const spaceContext = useContext(CreativeSpacesContext);
  const tabText = SpaceTabStage.Post;
  const active = tab === tabText;

  const spaceId = spaceContext?.spaceId;
  const chapterId = chapterListController?.state?.objId;
  const postId = postListController?.state?.objId;

  // Construct the URL only if spaceId is available
  const url = spaceId
    ? `${spacesMap.spaces.id.post.link(spaceId)}?chapter=${chapterId ?? ''}&post=${postId ?? ''}`
    : '#'; // Fallback URL if spaceId is not defined

  return (
    <Tab href={url}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}
