'use client';
import insideVerses from '@/(logic)/utils/isAuth';
import { VentureHorizonsView } from './(horizons-epic)/view';

function Page() {
  return <VentureHorizonsView />;
}

export default insideVerses(Page);
