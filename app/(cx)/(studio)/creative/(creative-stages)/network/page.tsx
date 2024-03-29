'use client';
import insideVerses from '@/(logic)/utils/isAuth';
import { CreativeNetworkView } from './(network-epic)/view';

function Page() {
  return <CreativeNetworkView />;
}

export default insideVerses(Page);
