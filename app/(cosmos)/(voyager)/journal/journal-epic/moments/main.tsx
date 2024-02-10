import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';
import { useContext } from 'react';
import { FeedJournalContext } from '../../(stages)/feed/page';
import { FeedMoment } from './moment/main';

export function FeedPosts() {
  const { moments } = useContext(FeedJournalContext);
  
  return (
    <Layer
      displayName={FeedPosts.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col-center']} overflow-auto p-[3rem]`}
    >
      {moments.map((moment) => (
        <FeedMoment moment={moment} />
      ))}
    </Layer>
  );
}
