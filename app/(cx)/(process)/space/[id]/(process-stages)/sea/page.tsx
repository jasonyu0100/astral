'use client';
import insideVerse from '@/(logic)/utils/isAuth';
import { ShareView } from './(sea-epic)/view';

function Page() {
  return <ShareView />;
}

export default insideVerse(Page);
