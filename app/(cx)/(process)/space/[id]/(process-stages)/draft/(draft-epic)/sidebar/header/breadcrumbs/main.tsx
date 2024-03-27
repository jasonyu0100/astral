import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
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
      displayName={SidebarBreadcrumbs.name}
      sizeStyle='h-[60px] w-full'
      borderStyle={`${borderStyles['border-b']}`}
      className={`${containerStyles['row-center']} space-x-[1rem]`}
    >
      {children}
    </GlassAreaContainer>
  );
}
