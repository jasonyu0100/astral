import { Layer } from '@/(common)/layer/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';
import React from 'react';

export function SidebarBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SidebarBreadcrumbs.name}
      sizeStyle='h-[60px] w-full'
      borderStyle={`${borderStyles['border-b']}`}
      className={`${containerStyles['row-center']} space-x-[1rem]`}
    >
      {children}
    </Layer>
  );
}
