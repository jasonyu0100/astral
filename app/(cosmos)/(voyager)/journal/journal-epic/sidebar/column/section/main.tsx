import { FeedJournalContext } from '@/(cosmos)/(voyager)/journal/(stages)/feed/page';
import { useContext } from 'react';
import { FeedSidebarEntry } from './entry/main';

export function FeedSidebarSection() {
  const { moments } = useContext(FeedJournalContext);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <div className='space-y-[1rem]'>
        {moments.map((moment) => (
          <FeedSidebarEntry moment={moment} />
        ))}
      </div>
    </div>
  );
}
