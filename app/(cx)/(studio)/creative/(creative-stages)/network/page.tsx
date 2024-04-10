'use client';
import insideVerse from '@/(logic)/utils/isAuth';
import { CreativeNetworkView } from './(network-epic)/view';

function Page() {
  return <CreativeNetworkView />;
}

export default insideVerse(Page);
