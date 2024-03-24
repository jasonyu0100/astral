'use client';
import insideVerses from '@/(logic)/utils/isAuth';
import { ArtistssNetworkView } from './view';

function Page() {
  return (
    <>
      <ArtistssNetworkView />
    </>
  );
}

export default insideVerses(Page);
