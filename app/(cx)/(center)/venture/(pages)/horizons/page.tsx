'use client';
import insideVerse from '@/(lgx)/utils/isAuth';
import { VentureHorizonsView } from './(horizons-epic)/view';

function Page() {
  return <VentureHorizonsView />;
}

export default insideVerse(Page);
