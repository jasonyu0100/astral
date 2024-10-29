'use client';
import { createContext } from 'react';

interface CreativePrivateSpacesContextObj {
  spaceId: string;
}

export const CreativePrivateSpacesContext =
  createContext<CreativePrivateSpacesContextObj>(
    {} as CreativePrivateSpacesContextObj,
  );

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;

  params: { id: string };
}) {
  return (
    <CreativePrivateSpacesContext.Provider value={{ spaceId: params.id }}>
      {children}
    </CreativePrivateSpacesContext.Provider>
  );
}
