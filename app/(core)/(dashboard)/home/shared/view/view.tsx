'use client';
import { HomeSharedContainer } from './container/main';
import { HomeSharedTable } from './table/main';

export function HomeSharedView() {
  return (
    <HomeSharedContainer>
      <HomeSharedTable />
    </HomeSharedContainer>
  );
}
