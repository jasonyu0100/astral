'use client';
import insideCosmos from '@/(logic)/utils/isAuth';
import { SeaView } from './view';

function Page() {
  return <SeaView />;
}

export default insideCosmos(Page);
