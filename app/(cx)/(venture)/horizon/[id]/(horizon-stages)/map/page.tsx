'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { MapView } from './view';
import { MapSidebar } from './(map-epic)/sidebar/main';

function Page() {
  return <>
    <MapView>
      <div className="h-full flex-grow">

      </div>
      <MapSidebar/>
    </MapView>
  </>;
}

export default insideVerses(Page);
