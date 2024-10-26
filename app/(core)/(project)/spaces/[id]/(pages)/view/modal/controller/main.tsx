import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesViewAddCollectionModal } from '../add/collection/main';
import { SpacesViewAddGalleryModal } from '../add/gallery/main';
import { SpacesViewAddArticleIdeaModal } from '../add/idea/article/main';
import { SpacesViewAddFileIdeaModal } from '../add/idea/file/main';
import { SpacesViewAddGenerateIdeaModal } from '../add/idea/generate/main';
import { SpacesViewAddSearchIdeaModal } from '../add/idea/search/main';
import { SpacesViewAddSpotifyUrlModal } from '../add/idea/spotify/main';
import { SpacesViewAddStickyIdeaModal } from '../add/idea/sticky/main';
import { SpacesViewAddWebsiteUrlModal } from '../add/idea/website/main';
import { SpacesViewAddYouTubeUrlModal } from '../add/idea/youtube/main';
import { SpacesViewAddResourceModal } from '../add/resource/main';
import { SpacesViewAddSceneModal } from '../add/scene/main';
import { SpacesViewCombineIdeas } from '../combine/main';
import { SpacesViewGenerateLog } from '../generate/main';

export const ContextForSpacesViewModals = createContext({} as SpacesViewModals);

export interface SpacesViewModals {
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
}

export function SpacesViewModals({ children }: { children: React.ReactNode }) {
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

  return (
    <ContextForSpacesViewModals.Provider
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
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addCollectionController}>
        <SpacesViewAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGalleryController}>
        <SpacesViewAddGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileIdeaController}>
        <SpacesViewAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addYouTubeUrlIdeaController}>
        <SpacesViewAddYouTubeUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addWebsiteUrlIdeaController}>
        <SpacesViewAddWebsiteUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotifyUrlIdeaController}>
        <SpacesViewAddSpotifyUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addStickyIdeaController}>
        <SpacesViewAddStickyIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addArticleIdeaController}>
        <SpacesViewAddArticleIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addResourceController}>
        <SpacesViewAddResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesViewAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSearchIdeaController}>
        <SpacesViewAddSearchIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generatePlanController}>
        <SpacesViewGenerateLog />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateIdeaController}>
        <SpacesViewAddGenerateIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={combineIdeasController}>
        <SpacesViewCombineIdeas />
      </ContextForOpenable.Provider>
    </ContextForSpacesViewModals.Provider>
  );
}
