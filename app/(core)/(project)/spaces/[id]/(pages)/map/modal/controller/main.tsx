import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesMapAddChapterModal } from '../add/chapter/main';
import { SpacesMapAddCollectionModal } from '../add/collection/main';
import { SpacesMapAddGalleryModal } from '../add/gallery/main';
import { SpacesMapAddFileIdeaModal } from '../add/idea/file/main';
import { SpacesMapAddGenerateIdeaModal } from '../add/idea/generate/main';
import { SpacesMapAddUrlIdeaModal } from '../add/idea/link/main';
import { SpacesMapAddSearchIdeaModal } from '../add/idea/search/main';
import { SpacesMapAddTextIdeaModal } from '../add/idea/text/main';
import { SpacesMapAddResourceModal } from '../add/resource/main';
import { SpacesMapAddSceneModal } from '../add/scene/main';
import { SpacesMapCombineIdeas } from '../combine/main';
import { SpacesMapGenerateLog } from '../generate/main';

export const ContextForSpacesMapModals = createContext({} as SpacesMapModals);

export interface SpacesMapModals {
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
  combineIdeasController: ContextForOpenableInterface;
}

export function SpacesMapModals({ children }: { children: React.ReactNode }) {
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
  const combineIdeasController = useControllerForOpenable();

  return (
    <ContextForSpacesMapModals.Provider
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
        combineIdeasController: combineIdeasController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesMapAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addCollectionController}>
        <SpacesMapAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGalleryController}>
        <SpacesMapAddGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileIdeaController}>
        <SpacesMapAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addUrlIdeaController}>
        <SpacesMapAddUrlIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addTextIdeaController}>
        <SpacesMapAddTextIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addResourceController}>
        <SpacesMapAddResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesMapAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSearchIdeaController}>
        <SpacesMapAddSearchIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generatePlanController}>
        <SpacesMapGenerateLog />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateIdeaController}>
        <SpacesMapAddGenerateIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={combineIdeasController}>
        <SpacesMapCombineIdeas />
      </ContextForOpenable.Provider>
    </ContextForSpacesMapModals.Provider>
  );
}
