import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { useContext } from 'react';
import { FeedJournalContext } from '../../(journal-stages)/updates/page';
import { FeedMoment } from './moment/main';
import { MomentContext, exampleMoments } from '@/(logic)/internal/data/infra/model/flow/moment/main';

export function FeedPosts() {
  // TODO
  // const { moments } = useContext(FeedJournalContext);
  const moments = exampleMoments

  return (
    <GlassContainer
      displayName={FeedPosts.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col-center']} overflow-auto p-[3rem]`}
    >
      {moments.map((moment) => (
        <MomentContext.Provider value={moment} key={moment.id}>
          <FeedMoment key={moment.id} />
        </MomentContext.Provider>
      ))}
    </GlassContainer>
  );
}
