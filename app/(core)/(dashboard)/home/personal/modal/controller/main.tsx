import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { HomePersonalCreateFromSourceModalView } from '../create-space/from-source/main';
import { HomePersonalCreateSpaceModalView } from '../create-space/from-template/main';
import { HomePersonalShowNoticeModal } from '../show/notice/main';

export const ContextForHomePersonalModals = createContext(
  {} as HomePersonalModalsController,
);

export interface HomePersonalModalsController {
  showNoticeController: ContextForOpenableInterface;
  createSpaceController: ContextForOpenableInterface;
  createFromSourceController: ContextForOpenableInterface;
}

export function HomePersonalModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const showNoticeController = useControllerForOpenable();
  const createSpaceController = useControllerForOpenable();
  const createFromSourceController = useControllerForOpenable();

  return (
    <ContextForHomePersonalModals.Provider
      value={{
        showNoticeController: showNoticeController,
        createSpaceController: createSpaceController,
        createFromSourceController: createFromSourceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={showNoticeController}>
        <HomePersonalShowNoticeModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createSpaceController}>
        <HomePersonalCreateSpaceModalView />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createFromSourceController}>
        <HomePersonalCreateFromSourceModalView />
      </ContextForOpenable.Provider>
    </ContextForHomePersonalModals.Provider>
  );
}
