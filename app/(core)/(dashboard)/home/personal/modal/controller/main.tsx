import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { HomePersonalCreateSpaceModalView } from '../create-space/main';
import { HomePersonalShowNoticeModal } from '../show/notice/main';

export const ContextForHomePersonalModals = createContext(
  {} as HomePersonalModalsController,
);

export interface HomePersonalModalsController {
  showNoticeController: ContextForOpenableInterface;
  createSpaceController: ContextForOpenableInterface;
}

export function HomePersonalModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const showNoticeController = useControllerForOpenable();
  const createSpaceController = useControllerForOpenable();

  return (
    <ContextForHomePersonalModals.Provider
      value={{
        showNoticeController: showNoticeController,
        createSpaceController: createSpaceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={showNoticeController}>
        <HomePersonalShowNoticeModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createSpaceController}>
        <HomePersonalCreateSpaceModalView />
      </ContextForOpenable.Provider>
    </ContextForHomePersonalModals.Provider>
  );
}
