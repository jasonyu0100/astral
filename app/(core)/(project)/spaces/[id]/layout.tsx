'use client';
import { createContext } from 'react';

interface CreativeSpacesContextObj {
  spaceId: string;
}

export const CreativeSpacesContext = createContext<CreativeSpacesContextObj>(
  {} as CreativeSpacesContextObj,
);

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;

  params: { id: string };
}) {
  return (
    <CreativeSpacesContext.Provider value={{ spaceId: params.id }}>
      {children}
    </CreativeSpacesContext.Provider>
  );
}
