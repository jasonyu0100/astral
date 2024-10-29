'use client';
import { createContext } from 'react';

interface CreativePublicSpaceContextObj {
  spaceId: string;
}

export const CreativePublicSpacesContext =
  createContext<CreativePublicSpaceContextObj>(
    {} as CreativePublicSpaceContextObj,
  );

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;

  params: { id: string };
}) {
  return (
    <CreativePublicSpacesContext.Provider value={{ spaceId: params.id }}>
      {children}
    </CreativePublicSpacesContext.Provider>
  );
}
