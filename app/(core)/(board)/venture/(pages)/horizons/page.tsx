'use client';
import insideVerse from '@/(utils)/isAuth';
import { VentureHorizonsView } from './(horizons-epic)/view';

function Page() {
  return <VentureHorizonsView />;
}

export default insideVerse(Page);
