import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesSceneAddCollectionModal } from '../add/collection/main';
import { SpacesSceneAddGalleryModal } from '../add/gallery/main';
import { SpacesSceneAddArticleIdeaModal } from '../add/idea/article/main';
import { SpacesSceneAddFileIdeaModal } from '../add/idea/file/main';
import { SpacesSceneAddGenerateIdeaModal } from '../add/idea/generate/main';
import { SpacesSceneAddSearchIdeaModal } from '../add/idea/search/main';
import { SpacesSceneAddSpotifyUrlModal } from '../add/idea/spotify/main';
import { SpacesSceneAddStickyIdeaModal } from '../add/idea/sticky/main';
import { SpacesSceneAddWebsiteUrlModal } from '../add/idea/website/main';
import { SpacesSceneAddYouTubeUrlModal } from '../add/idea/youtube/main';
import { SpacesSceneAddResourceModal } from '../add/resource/main';
import { SpacesSceneAddSceneModal } from '../add/scene/main';
import { SpacesSceneCombineIdeas } from '../combine/main';
import { SpacesSceneGeneratePost } from '../generate/main';
import { SpacesSceneShareViewModal } from '../share/main';

export const ContextForSpacesSceneModals = createContext(
  {} as SpacesSceneModals,
);

export interface SpacesSceneModals {
  addCollectionController: ContextForOpenableInterface;
  addGalleryController: ContextForOpenableInterface;
  addFileIdeaController: ContextForOpenableInterface;
  addYouTubeUrlIdeaController: ContextForOpenableInterface;
  addSpotifyUrlIdeaController: ContextForOpenableInterface;
  addWebsiteUrlIdeaController: ContextForOpenableInterface;
  addStickyIdeaController: ContextForOpenableInterface;
  addArticleIdeaController: ContextForOpenableInterface;
  addResourceController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addSearchIdeaController: ContextForOpenableInterface;
  addGenerateIdeaController: ContextForOpenableInterface;
  generatePlanController: ContextForOpenableInterface;
  combineIdeasController: ContextForOpenableInterface;
  shareViewController: ContextForOpenableInterface;
}

export function SpacesSceneModals({ children }: { children: React.ReactNode }) {
  const addCollectionController = useControllerForOpenable();
  const addGalleryController = useControllerForOpenable();
  const addFileIdeaController = useControllerForOpenable();
  const addYouTubeUrlIdeaController = useControllerForOpenable();
  const addSpotifyUrlIdeaController = useControllerForOpenable();
  const addWebsiteUrlIdeaController = useControllerForOpenable();
  const addStickyIdeaController = useControllerForOpenable();
  const addArticleIdeaController = useControllerForOpenable();
  const addResourceController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addGenerateIdeaController = useControllerForOpenable();
  const generatePlanController = useControllerForOpenable();
  const addSearchIdeaController = useControllerForOpenable();
  const combineIdeasController = useControllerForOpenable();
  const shareViewController = useControllerForOpenable();

  return (
    <ContextForSpacesSceneModals.Provider
      value={{
        addGalleryController: addGalleryController,
        addCollectionController: addCollectionController,
        addFileIdeaController: addFileIdeaController,
        addYouTubeUrlIdeaController: addYouTubeUrlIdeaController,
        addSpotifyUrlIdeaController: addSpotifyUrlIdeaController,
        addWebsiteUrlIdeaController: addWebsiteUrlIdeaController,
        addStickyIdeaController: addStickyIdeaController,
        addArticleIdeaController: addArticleIdeaController,
        addResourceController: addResourceController,
        addSceneController: addSceneController,
        addGenerateIdeaController: addGenerateIdeaController,
        addSearchIdeaController: addSearchIdeaController,
        generatePlanController: generatePlanController,
        combineIdeasController: combineIdeasController,
        shareViewController: shareViewController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addCollectionController}>
        <SpacesSceneAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGalleryController}>
        <SpacesSceneAddGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileIdeaController}>
        <SpacesSceneAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addYouTubeUrlIdeaController}>
        <SpacesSceneAddYouTubeUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addWebsiteUrlIdeaController}>
        <SpacesSceneAddWebsiteUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotifyUrlIdeaController}>
        <SpacesSceneAddSpotifyUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addStickyIdeaController}>
        <SpacesSceneAddStickyIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addArticleIdeaController}>
        <SpacesSceneAddArticleIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addResourceController}>
        <SpacesSceneAddResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesSceneAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSearchIdeaController}>
        <SpacesSceneAddSearchIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generatePlanController}>
        <SpacesSceneGeneratePost />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateIdeaController}>
        <SpacesSceneAddGenerateIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={combineIdeasController}>
        <SpacesSceneCombineIdeas />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareViewController}>
        <SpacesSceneShareViewModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesSceneModals.Provider>
  );
}
