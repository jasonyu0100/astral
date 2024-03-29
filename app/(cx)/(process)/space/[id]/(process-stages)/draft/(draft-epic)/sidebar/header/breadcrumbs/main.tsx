import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  borderFx,
  containerFx,
} from '@/(design)/(fx)/data';
import React from 'react';

export function SidebarBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={SidebarBreadcrumbs.name}
      sizeFx='h-[60px] w-full'
      borderFx={`${borderFx['border-b']}`}
      className={`${containerFx['row-center']} space-x-[1rem]`}
    >
      {children}
    </GlassAreaContainer>
  );
}
