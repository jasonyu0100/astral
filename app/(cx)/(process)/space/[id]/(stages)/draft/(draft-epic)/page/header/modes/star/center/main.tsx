import { useContext } from 'react';
import { StarContext } from '@/(logic)/model/draft/constellation/star/main';
import DraftHeaderTitle from '../../common/title/main';

export function DraftHeaderStarCenter() {
  const star = useContext(StarContext);

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <DraftHeaderTitle>{star.variant} - {star.title}</DraftHeaderTitle>
    </div>
  );
}
