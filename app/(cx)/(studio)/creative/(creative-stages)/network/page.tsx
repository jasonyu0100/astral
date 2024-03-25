'use client';
import insideVerses from '@/(logic)/utils/isAuth';
import { ArtistsNetworkView } from './view';

function Page() {
  return <ArtistsNetworkView />;
}

export default insideVerses(Page);
