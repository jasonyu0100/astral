import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceMapAddChapterModal } from '../add/chapter/main';
import { SpaceMapAddCollectionModal } from '../add/collection/main';
import { SpaceMapAddGalleryModal } from '../add/gallery/main';
import { SpaceMapAddFileIdeaModal } from '../add/idea/file/main';
import { SpaceMapAddGenerateIdeaModal } from '../add/idea/generate/main';
import { SpaceMapAddUrlIdeaModal } from '../add/idea/link/main';
import { SpaceMapAddSearchIdeaModal } from '../add/idea/search/main';
import { SpaceMapAddTextIdeaModal } from '../add/idea/text/main';
import { SpaceMapAddResourceModal } from '../add/resource/main';
import { SpaceMapAddSceneModal } from '../add/scene/main';
import { SpaceMapGenerateLog } from '../generate/main';

export const ContextForSpaceMapModals = createContext({} as SpaceMapModals);

export interface SpaceMapModals {
  addChapterController: ContextForOpenableInterface;
  addCollectionController: ContextForOpenableInterface;
  addGalleryController: ContextForOpenableInterface;
  addFileIdeaController: ContextForOpenableInterface;
  addUrlIdeaController: ContextForOpenableInterface;
  addTextIdeaController: ContextForOpenableInterface;
  addResourceController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addSearchIdeaController: ContextForOpenableInterface;
  addGenerateIdeaController: ContextForOpenableInterface;
  generatePlanController: ContextForOpenableInterface;
}

export function SpaceMapModals({ children }: { children: React.ReactNode }) {
  const addChapterController = useControllerForOpenable();
  const addCollectionController = useControllerForOpenable();
  const addGalleryController = useControllerForOpenable();
  const addFileIdeaController = useControllerForOpenable();
  const addUrlIdeaController = useControllerForOpenable();
  const addTextIdeaController = useControllerForOpenable();
  const addResourceController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addGenerateIdeaController = useControllerForOpenable();
  const generatePlanController = useControllerForOpenable();
  const addSearchIdeaController = useControllerForOpenable();

  return (
    <ContextForSpaceMapModals.Provider
      value={{
        addChapterController: addChapterController,
        addGalleryController: addGalleryController,
        addCollectionController: addCollectionController,
        addFileIdeaController: addFileIdeaController,
        addUrlIdeaController: addUrlIdeaController,
        addTextIdeaController: addTextIdeaController,
        addResourceController: addResourceController,
        addSceneController: addSceneController,
        addGenerateIdeaController: addGenerateIdeaController,
        addSearchIdeaController: addSearchIdeaController,
        generatePlanController: generatePlanController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceMapAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addCollectionController}>
        <SpaceMapAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGalleryController}>
        <SpaceMapAddGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileIdeaController}>
        <SpaceMapAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addUrlIdeaController}>
        <SpaceMapAddUrlIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addTextIdeaController}>
        <SpaceMapAddTextIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addResourceController}>
        <SpaceMapAddResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpaceMapAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSearchIdeaController}>
        <SpaceMapAddSearchIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generatePlanController}>
        <SpaceMapGenerateLog />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateIdeaController}>
        <SpaceMapAddGenerateIdeaModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceMapModals.Provider>
  );
}
