import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { HomeProjectsCreateFromSourceModalView } from '../create-space/from-source/main';
import { HomeProjectsCreateSpaceModalView } from '../create-space/from-template/main';
import { HomeProjectsShowNoticeModal } from '../show/notice/main';

export const ContextForHomeProjectsModals = createContext(
  {} as HomeProjectsModalsController,
);

export interface HomeProjectsModalsController {
  showNoticeController: ContextForOpenableInterface;
  createSpaceController: ContextForOpenableInterface;
  createFromSourceController: ContextForOpenableInterface;
}

export function HomeProjectsModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const showNoticeController = useControllerForOpenable();
  const createSpaceController = useControllerForOpenable();
  const createFromSourceController = useControllerForOpenable();

  return (
    <ContextForHomeProjectsModals.Provider
      value={{
        showNoticeController: showNoticeController,
        createSpaceController: createSpaceController,
        createFromSourceController: createFromSourceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={showNoticeController}>
        <HomeProjectsShowNoticeModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createSpaceController}>
        <HomeProjectsCreateSpaceModalView />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createFromSourceController}>
        <HomeProjectsCreateFromSourceModalView />
      </ContextForOpenable.Provider>
    </ContextForHomeProjectsModals.Provider>
  );
}
