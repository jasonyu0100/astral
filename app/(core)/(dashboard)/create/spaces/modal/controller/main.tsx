import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { CreateSpacesCreateFromSourceModalView } from '../create-space/from-source/main';
import { CreateSpacesCreateSpaceModalView } from '../create-space/from-template/main';
import { CreateSpacesShowNoticeModal } from '../show/notice/main';

export const ContextForCreateSpacesModals = createContext(
  {} as CreateSpacesModalsController,
);

export interface CreateSpacesModalsController {
  showNoticeController: ContextForOpenableInterface;
  createSpaceController: ContextForOpenableInterface;
  createFromSourceController: ContextForOpenableInterface;
}

export function CreateSpacesModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const showNoticeController = useControllerForOpenable();
  const createSpaceController = useControllerForOpenable();
  const createFromSourceController = useControllerForOpenable();

  return (
    <ContextForCreateSpacesModals.Provider
      value={{
        showNoticeController: showNoticeController,
        createSpaceController: createSpaceController,
        createFromSourceController: createFromSourceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={showNoticeController}>
        <CreateSpacesShowNoticeModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createSpaceController}>
        <CreateSpacesCreateSpaceModalView />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={createFromSourceController}>
        <CreateSpacesCreateFromSourceModalView />
      </ContextForOpenable.Provider>
    </ContextForCreateSpacesModals.Provider>
  );
}
