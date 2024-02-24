import { Glass } from '@/(components)/glass/main';
import { containerStyles } from '@/(components)/styles/data';
import { useContext } from 'react';
import { FeedJournalContext } from '../../(journal-stages)/feed/page';
import { FeedMoment } from './moment/main';

export function FeedPosts() {
  const { moments } = useContext(FeedJournalContext);
  
  return (
    <Glass
      displayName={FeedPosts.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col-center']} overflow-auto p-[3rem]`}
    >
      {moments.map((moment) => (
        <FeedMoment moment={moment} />
      ))}
    </Glass>
  );
}
