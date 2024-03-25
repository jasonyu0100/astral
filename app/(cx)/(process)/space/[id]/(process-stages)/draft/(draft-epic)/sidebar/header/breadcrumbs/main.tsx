import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
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
    <GlassContainer
      displayName={SidebarBreadcrumbs.name}
      sizeStyle='h-[60px] w-full'
      borderStyle={`${borderStyles['border-b']}`}
      className={`${containerStyles['row-center']} space-x-[1rem]`}
    >
      {children}
    </GlassContainer>
  );
}
