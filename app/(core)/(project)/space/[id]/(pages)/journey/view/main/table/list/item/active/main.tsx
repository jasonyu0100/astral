import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { SpaceJourneyLogTableItemAuthor } from '../fields/author/main';
import { SpaceJourneyLogTableItemLength } from '../fields/length/main';
import { SpaceJourneyLogTableItemNumber } from '../fields/number/main';
import { SpaceJourneyLogTableItemStatus } from '../fields/status/main';
import { SpaceJourneyLogTableItemSticky } from '../fields/sticky/main';

export function SpaceJourneyLogTableItemActive() {
  const log = useContext(ContextForChapterLogObj);
  const logListController = useContext(ContextForChapterLogList);

  return (
    <GlassWindowFrame className='w-full py-[2rem]'>
      <GlassWindowContents
        className='grid w-full grid-cols-7 items-center justify-items-center'
        onClick={() => {
          logListController.actions.stateActions.select(log);
        }}
      >
        <SpaceJourneyLogTableItemNumber />
        <SpaceJourneyLogTableItemSticky />
        <div></div>
        <SpaceJourneyLogTableItemStatus />
        <SpaceJourneyLogTableItemLength />
        <SpaceJourneyLogTableItemAuthor />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
