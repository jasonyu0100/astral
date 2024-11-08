'use client';
import { HomePersonalContainer } from './container/main';
import { HomePersonalHeader } from './header/main';
import { HomePersonalTable } from './table/main';

export function HomePersonalView() {
  return (
    <HomePersonalContainer>
      <HomePersonalHeader />
      <HomePersonalTable />
    </HomePersonalContainer>
  );
}
