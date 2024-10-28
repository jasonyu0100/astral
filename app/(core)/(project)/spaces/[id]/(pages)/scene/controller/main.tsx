import { ContextForLoading } from '@/components/loading/controller/main';
import { ContextForGalleryCollectionList } from '@/server/controller/gallery/collection/list';
import { ContextForGalleryList } from '@/server/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaRelationshipListFromScene } from '@/server/controller/idea/relationship/list-from-scene';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { GalleryCollectionObj } from '@/server/model/gallery/collection/main';
import { GalleryObj } from '@/server/model/gallery/main';
import { IdeaObj } from '@/server/model/idea/main';
import { IdeaRelationshipObj } from '@/server/model/idea/relationship/main';
import html2canvas from 'html2canvas';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  divWidth: number;
  divHeight: number;
  selectedIdeas: IdeaObj[];
  directoryMode: SpacesSceneDirectoryMode;
  linkMode: SpacesSceneLinkMode;
  mapMode: SpacesSceneInteractionMode;
  sidebarMediaMode: SpacesSceneSidebarMediaMode;
  sidebarContentMode: SpacesSceneSidebarContentMode;
  sidebarMode: SpacesSceneSidebarMode;
  sidebarVisibility: SpacesSceneSidebarVisibility;
  bubbleMode: SpacesSceneBubbleMode;
  screenshotRef: React.RefObject<HTMLDivElement>;
  hideUI: boolean;
}

interface ControllerActions {
  updateDirectoryMode: (mode: SpacesSceneDirectoryMode) => void;
  updateDivWidth: (width: number) => void;
  updateDivHeight: (height: number) => void;
  updateLinkMode: (mode: SpacesSceneLinkMode) => void;
  updateBubbleMode: (mode: SpacesSceneBubbleMode) => void;
  updateSelectedIdeas: (ideas: IdeaObj[]) => void;
  updateInteractionMode: (mode: SpacesSceneInteractionMode) => void;
  updateSidebarContentMode: (mode: SpacesSceneSidebarContentMode) => void;
  updateSidebarMode: (mode: SpacesSceneSidebarMode) => void;
  checkContainsSelectedIdea: (ideaObj: IdeaObj) => boolean;
  updateSidebarVisibility: (visibility: SpacesSceneSidebarVisibility) => void;
  linkIdeas: () => Promise<IdeaRelationshipObj[]>;
  selectAll: () => void;
  deselectAll: () => void;
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
  takeScreenshot: () => void;
  updateHideUI: (hide: boolean) => void;
  saveAll: () => void;
}

export const ContextForSpacesScene = createContext({} as Controller);

export enum SpacesSceneSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesSceneInteractionMode {
  CURSOR = 'Cursor',
  SELECTED = 'Selected',
}

export enum SpacesSceneIdeaMode {
  DEFAULT = 'Default',
  INFORMATION = 'Information',
}

export enum SpacesSceneBubbleMode {
  OFF = 'OFF',
  ON = 'ON',
}

export enum SpacesSceneSidebarMediaMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}

export enum SpacesSceneSidebarContentMode {
  EXPLORER = 'Explorer',
  CHAT_SCENE = 'Chat Scene',
  CHAPTERS = 'Chapters',
}

export enum SpacesSceneSidebarMode {
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
  CHAT = 'Chat',
}

export enum SpacesSceneLinkMode {
  ON = 'ON',
  OFF = 'OFF',
}

export enum SpacesSceneDirectoryMode {
  DEFAULT = 'Default',
  DIRECTORY = 'DIRECTORY',
}

export function useControllerForSpacesScene(): Controller {
  const loadingController = useContext(ContextForLoading);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceController = useContext(ContextForSpaceMain);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const galleryListController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const ideaRelationshipListController = useContext(
    ContextForIdeaRelationshipListFromScene,
  );
  const [selectedIdeas, setSelectedIdeas] = useState<IdeaObj[]>([]);
  const [bubbleMode, setBubbleMode] = useState<SpacesSceneBubbleMode>(
    SpacesSceneBubbleMode.ON,
  );
  const [directoryMode, setDirectoryMode] = useState<SpacesSceneDirectoryMode>(
    SpacesSceneDirectoryMode.DEFAULT,
  );
  const [listSceneMode, setListSceneMode] = useState<SpacesSceneSidebarMode>(
    SpacesSceneSidebarMode.SCENES,
  );
  const [mapMode, setMode] = useState<SpacesSceneInteractionMode>(
    SpacesSceneInteractionMode.SELECTED,
  );
  const [listMode, setListMode] = useState<SpacesSceneSidebarContentMode>(
    SpacesSceneSidebarContentMode.CHAPTERS,
  );
  const [linkMode, setLinkMode] = useState<SpacesSceneLinkMode>(
    SpacesSceneLinkMode.ON,
  );
  const [sidebarMediaMode, changeSidebarMediaMode] = useState(
    SpacesSceneSidebarMediaMode.Collection,
  );
  const [sidebarVisibility, setSidebarVisibility] = useState(
    SpacesSceneSidebarVisibility.OPEN,
  );

  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  // Add ref for capturing the screenshot of the container
  const screenshotRef = useRef<HTMLDivElement>(null);

  // State to control the visibility of UI components
  const [hideUI, setHideUI] = useState(false);

  // Function to handle screenshot
  const takeScreenshot = async () => {
    // Hide UI components before taking the screenshot
    setLinkMode(SpacesSceneLinkMode.ON);
    setBubbleMode(SpacesSceneBubbleMode.OFF);
    setHideUI(true);

    setTimeout(async () => {
      if (screenshotRef.current) {
        try {
          const canvas = await html2canvas(screenshotRef.current, {
            useCORS: true, // To capture cross-origin images
          });
          const imgData = canvas.toDataURL('image/png'); // Convert to image

          // Create an anchor element to download the screenshot
          const link = document.createElement('a');
          link.href = imgData;
          link.download = 'screenshot.png';
          link.click(); // Trigger download
        } catch (error) {
          console.error('Screenshot capture failed:', error);
        } finally {
          // Show UI components again after the screenshot
          setHideUI(false);
          setLinkMode(SpacesSceneLinkMode.ON);
          setBubbleMode(SpacesSceneBubbleMode.ON);
        }
      }
    }, 500);
  };

  const linkIdeas = async () => {
    const ideaRelationships = await Promise.all(
      selectedIdeas.slice(0, selectedIdeas.length - 1).map((idea, index) => {
        const toIdea = selectedIdeas[index + 1];
        return ideaRelationshipListController.actions.createActions.createFromIdea(
          idea,
          toIdea,
          spaceController.state.objId,
          chapterListController.state.objId,
          sceneListController.state.objId,
        );
      }),
    );

    return ideaRelationships;
  };

  const saveAll = async () => {
    ideaListController.actions.editActions.sync().then(() => {
      alert('save all');
    });
  };

  useEffect(() => {
    setSelectedIdeas([]);
  }, [sceneListController.state.objId]);

  return {
    state: {
      directoryMode: directoryMode,
      divWidth: divWidth,
      divHeight: divHeight,
      linkMode: linkMode,
      selectedIdeas: selectedIdeas,
      bubbleMode: bubbleMode,
      mapMode: mapMode,
      sidebarMediaMode: sidebarMediaMode,
      sidebarContentMode: listMode,
      sidebarMode: listSceneMode,
      sidebarVisibility: sidebarVisibility,
      screenshotRef: screenshotRef,
      hideUI: hideUI,
    },
    actions: {
      saveAll: saveAll,
      updateHideUI: (hide: boolean) => setHideUI(hide),
      takeScreenshot: takeScreenshot,
      updateDivWidth: (width) => setDivWidth(width),
      updateDirectoryMode: (mode) => setDirectoryMode(mode),
      updateDivHeight: (height) => setDivHeight(height),
      updateLinkMode: (mode) => setLinkMode(mode),
      updateSelectedIdeas: (ideas) => setSelectedIdeas(ideas),
      updateBubbleMode: (mode) => setBubbleMode(mode),
      updateInteractionMode: (mode) => setMode(mode),
      updateSidebarContentMode: (mode) => setListMode(mode),
      updateSidebarMode: (mode) => setListSceneMode(mode),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      goToHome: () => {
        changeSidebarMediaMode(SpacesSceneSidebarMediaMode.Home);
      },
      goToGallery: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpacesSceneSidebarMediaMode.Gallery);
      },
      goToCollection: (collection: GalleryCollectionObj) => {
        collectionListController.actions.stateActions.select(collection);
        changeSidebarMediaMode(SpacesSceneSidebarMediaMode.Collection);
      },
      checkContainsSelectedIdea: (idea: IdeaObj) =>
        selectedIdeas.map((idea) => idea.id).includes(idea.id),
      selectAll: () => {
        setSelectedIdeas(ideaListController.state.objs);
      },
      deselectAll: () => {
        setSelectedIdeas([]);
      },
      linkIdeas: linkIdeas,
    },
  };
}
