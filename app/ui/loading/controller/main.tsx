import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { LoadingOverlay } from '../main';

export interface LoadingController {
  loadingController: ContextForOpenableInterface;
}

export const ContextForLoading = createContext({} as LoadingController);

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const loadingController = useControllerForOpenable();

  return (
    <ContextForLoading.Provider value={{ loadingController }}>
      <ContextForOpenable.Provider value={loadingController}>
        <LoadingOverlay />
      </ContextForOpenable.Provider>
      {children}
    </ContextForLoading.Provider>
  );
}
