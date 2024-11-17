import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { HomeCreateCreateFromSourceModalView } from '../create-space/from-source/main';
import { HomeCreateCreateSpaceModalView } from '../create-space/from-template/main';
import { HomeCreateShowNoticeModal } from '../show/notice/main';

export const ContextForHomeCreateModals = createContext(
  {} as HomeCreateModalsController,
);

export interface HomeCreateModalsController {
  showNoticeController: ContextForOpenableInterface;
  createSpaceController: ContextForOpenableInterface;
  createFromSourceController: ContextForOpenableInterface;
}

export function HomeCreateModals({ children }: { children: React.ReactNode }) {
  const showNoticeController = useControllerForOpenable();
  const createSpaceController = useControllerForOpenable();
  const createFromSourceController = useControllerForOpenable();

  return (
    <ContextForHomeCreateModals.Provider
      value={{
        showNoticeController: showNoticeController,
        createSpaceController: createSpaceController,
        createFromSourceController: createFromSourceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={showNoticeController}>
        <HomeCreateShowNoticeModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createSpaceController}>
        <HomeCreateCreateSpaceModalView />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createFromSourceController}>
        <HomeCreateCreateFromSourceModalView />
      </ContextForOpenable.Provider>
    </ContextForHomeCreateModals.Provider>
  );
}
