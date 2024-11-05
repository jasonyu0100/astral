import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesChannelAddChapterModal } from '../add/chapter/main';
import { SpacesChannelConstellationModal } from '../constellation/main';
import { SpacesChannelEditChapterModal } from '../edit/chapter/main';
import { SpacesChannelEditSpaceModal } from '../edit/space/main';

export const ContextForSpacesChannelModals = createContext(
  {} as SpacesChannelModals,
);

export interface SpacesChannelModals {
  addChapterController: ContextForOpenableInterface;
  generateSceneController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesChannelModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addChapterController = useControllerForOpenable();
  const generateSceneController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();

  return (
    <ContextForSpacesChannelModals.Provider
      value={{
        addChapterController: addChapterController,
        generateSceneController: generateSceneController,
        editChapterController: editChapterController,
        editSpaceController: editSpaceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesChannelAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generateSceneController}>
        <SpacesChannelConstellationModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesChannelEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesChannelEditSpaceModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesChannelModals.Provider>
  );
}
