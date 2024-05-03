import { useContext } from 'react';
import { StarContext } from '@/(lgx)/internal/model/map/constellation/star/main';
import MapHeaderTitle from '../../../common/title/main';

export function MapHeaderStarCenter() {
  const star = useContext(StarContext);

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <MapHeaderTitle>{star.variant} - {star.title}</MapHeaderTitle>
    </div>
  );
}
