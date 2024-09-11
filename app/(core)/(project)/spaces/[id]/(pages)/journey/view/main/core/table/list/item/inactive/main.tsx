import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForSpacesJourney } from '../../../../../../../controller/main';
import { SpacesJourneyLogTableItemAuthor } from '../fields/author/main';
import { SpacesJourneyLogTableItemLength } from '../fields/length/main';
import { SpacesJourneyLogTableItemNumber } from '../fields/number/main';
import { SpacesJourneyLogTableItemStatus } from '../fields/status/main';
import { SpacesJourneyLogTableItemSticky } from '../fields/sticky/main';

export function SpacesJourneyLogTableItemInactive() {
  const log = useContext(ContextForChapterLogObj);
  const logListController = useContext(ContextForChapterLogList);
  const {
    actions: { checkContainsSelectedLog },
  } = useContext(ContextForSpacesJourney);
  const selected = checkContainsSelectedLog(log);

  return (
    <GlassWindowFrame className='w-full py-[2rem]'>
      <GlassWindowContents
        className='grid w-full grid-cols-7 items-center justify-items-center'
        onClick={() => {
          logListController.actions.stateActions.select(log);
        }}
      >
        <SpacesJourneyLogTableItemNumber />
        <SpacesJourneyLogTableItemSticky />
        <SpacesJourneyLogTableItemStatus />
        <SpacesJourneyLogTableItemLength />
        <SpacesJourneyLogTableItemAuthor />
      </GlassWindowContents>
      {selected && <GlassWindowPane glassFx={glassFx['glass-5']} />}
    </GlassWindowFrame>
  );
}
