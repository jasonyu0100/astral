import { Glass } from '@/(components)/(basic)/glass/main';
import {
  backgroundStyles,
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
    <Glass
      displayName={SidebarBreadcrumbs.name}
      sizeStyle='h-[60px] w-full'
      borderStyle={`${borderStyles['border-b']}`}
      className={`${containerStyles['row-center']} space-x-[1rem]`}
    >
      {children}
    </Glass>
  );
}
