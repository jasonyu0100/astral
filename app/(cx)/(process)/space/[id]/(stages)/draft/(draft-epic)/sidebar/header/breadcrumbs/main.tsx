import { Glass } from '@/(components)/layer/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(components)/styles/data';
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
