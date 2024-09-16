'use client';

import { createContext } from 'react';

interface HorizonContextObj {
  releaseId: string;
}

export const ContextForHorizon = createContext<HorizonContextObj>(
  {} as HorizonContextObj,
);

export default function Layout({
  children,
  params,
}: {
  children?: React.ReactNode;
  params: { id: string };
}) {
  return (
    <ContextForHorizon.Provider value={{ releaseId: params.id }}>
      {children}
    </ContextForHorizon.Provider>
  );
}
