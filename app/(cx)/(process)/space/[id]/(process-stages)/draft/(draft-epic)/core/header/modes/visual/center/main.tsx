import { useContext } from 'react';
import { DraftContext } from '../../../../../../page';
import DraftHeaderTitle from '../../../common/title/main';

export function VisualCenter() {
  const draftContext = useContext(DraftContext);
  const constellation = draftContext.constellation;
  const chapter = draftContext.chapter;
  const headerTitle =
    draftContext.constellation && draftContext.chapter
      ? `${constellation?.title} - ${chapter?.title}`
      : 'None';

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <DraftHeaderTitle>{headerTitle}</DraftHeaderTitle>
    </div>
  );
}
