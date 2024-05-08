'use client';
import insideVerse from '@/(utils)/isAuth';
import { CreativeNetworkView } from './(network-epic)/view';

function Page() {
  return <CreativeNetworkView />;
}

export default insideVerse(Page);
