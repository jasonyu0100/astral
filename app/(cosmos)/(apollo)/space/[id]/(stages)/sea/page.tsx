'use client';
import insideCosmos from '@/utils/isAuth';
import { SeaView } from './view';

function Page() {
  return <SeaView />;
}

export default insideCosmos(Page);
