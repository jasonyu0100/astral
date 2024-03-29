import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import React from 'react';

export function SidebarBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={SidebarBreadcrumbs.name}
      size='h-[60px] w-full'
      border={`${borderStyles['border-b']}`}
      className={`${containerStyles['row-center']} space-x-[1rem]`}
    >
      {children}
    </GlassAreaContainer>
  );
}
