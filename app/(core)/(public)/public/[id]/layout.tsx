'use client';
import { createContext } from 'react';

interface CreativePublicSpaceContextObj {
  spaceId: string;
}

export const CreativePublicSpaceContext =
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
    <CreativePublicSpaceContext.Provider value={{ spaceId: params.id }}>
      {children}
    </CreativePublicSpaceContext.Provider>
  );
}
