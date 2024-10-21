import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesMapAddCollectionModal } from '../add/collection/main';
import { SpacesMapAddGalleryModal } from '../add/gallery/main';
import { SpacesMapAddFileIdeaModal } from '../add/idea/file/main';
import { SpacesMapAddGenerateIdeaModal } from '../add/idea/generate/main';
import { SpacesMapAddSearchIdeaModal } from '../add/idea/search/main';
import { SpacesMapAddSpotifyUrlModal } from '../add/idea/spotify/main';
import { SpacesMapAddTextIdeaModal } from '../add/idea/text/main';
import { SpacesMapAddWebsiteUrlModal } from '../add/idea/website/main';
import { SpacesMapAddYouTubeUrlModal } from '../add/idea/youtube/main';
import { SpacesMapAddResourceModal } from '../add/resource/main';
import { SpacesMapAddSceneModal } from '../add/scene/main';
import { SpacesMapCombineIdeas } from '../combine/main';
import { SpacesMapGenerateLog } from '../generate/main';

export const ContextForSpacesMapModals = createContext({} as SpacesMapModals);

export interface SpacesMapModals {
  addCollectionController: ContextForOpenableInterface;
  addGalleryController: ContextForOpenableInterface;
  addFileIdeaController: ContextForOpenableInterface;
  addYouTubeUrlIdeaController: ContextForOpenableInterface;
  addSpotifyUrlIdeaController: ContextForOpenableInterface;
  addWebsiteUrlIdeaController: ContextForOpenableInterface;
  addTextIdeaController: ContextForOpenableInterface;
  addResourceController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addSearchIdeaController: ContextForOpenableInterface;
  addGenerateIdeaController: ContextForOpenableInterface;
  generatePlanController: ContextForOpenableInterface;
  combineIdeasController: ContextForOpenableInterface;
}

export function SpacesMapModals({ children }: { children: React.ReactNode }) {
  const addCollectionController = useControllerForOpenable();
  const addGalleryController = useControllerForOpenable();
  const addFileIdeaController = useControllerForOpenable();
  const addYouTubeUrlIdeaController = useControllerForOpenable();
  const addSpotifyUrlIdeaController = useControllerForOpenable();
  const addWebsiteUrlIdeaController = useControllerForOpenable();
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
        addGalleryController: addGalleryController,
        addCollectionController: addCollectionController,
        addFileIdeaController: addFileIdeaController,
        addYouTubeUrlIdeaController: addYouTubeUrlIdeaController,
        addSpotifyUrlIdeaController: addSpotifyUrlIdeaController,
        addWebsiteUrlIdeaController: addWebsiteUrlIdeaController,
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
      <ContextForOpenable.Provider value={addCollectionController}>
        <SpacesMapAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGalleryController}>
        <SpacesMapAddGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileIdeaController}>
        <SpacesMapAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addYouTubeUrlIdeaController}>
        <SpacesMapAddYouTubeUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addWebsiteUrlIdeaController}>
        <SpacesMapAddWebsiteUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotifyUrlIdeaController}>
        <SpacesMapAddSpotifyUrlModal />
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
