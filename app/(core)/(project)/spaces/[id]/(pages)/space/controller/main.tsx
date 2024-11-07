import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaRelationshipListFromScene } from '@/architecture/controller/idea/relationship/list-from-scene';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { GalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { GalleryObj } from '@/architecture/model/gallery/main';
import { IdeaObj } from '@/architecture/model/idea/main';
import { IdeaRelationshipObj } from '@/architecture/model/idea/relationship/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import html2canvas from 'html2canvas';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  updateToggle: boolean;
  divWidth: number;
  divHeight: number;
  selectedIdeas: IdeaObj[];
  directoryMode: SpacesSpaceDirectoryMode;
  linkMode: SpacesSpaceLinkMode;
  interactionMode: SpacesSpaceInteractionMode;
  sidebarMediaMode: SpacesSpaceSidebarMediaMode;
  sidebarContentMode: SpacesSpaceSidebarContentMode;
  sidebarMode: SpacesSpaceSidebarMode;
  sidebarVisibility: SpacesSpaceSidebarVisibility;
  bubbleMode: SpacesSpaceBubbleMode;
  screenshotRef: React.RefObject<HTMLDivElement>;
  hideUI: boolean;
  zoom: number;
}

interface ControllerActions {
  updateDirectoryMode: (mode: SpacesSpaceDirectoryMode) => void;
  updateDivWidth: (width: number) => void;
  updateDivHeight: (height: number) => void;
  updateLinkMode: (mode: SpacesSpaceLinkMode) => void;
  updateBubbleMode: (mode: SpacesSpaceBubbleMode) => void;
  updateSelectedIdeas: (ideas: IdeaObj[]) => void;
  updateInteractionMode: (mode: SpacesSpaceInteractionMode) => void;
  updateSidebarContentMode: (mode: SpacesSpaceSidebarContentMode) => void;
  updateSidebarMode: (mode: SpacesSpaceSidebarMode) => void;
  checkContainsSelectedIdea: (ideaObj: IdeaObj) => boolean;
  updateSidebarVisibility: (visibility: SpacesSpaceSidebarVisibility) => void;
  updateZoom: (zoom: number) => void;
  linkIdeas: () => Promise<IdeaRelationshipObj[]>;
  copyIdeas: () => Promise<IdeaObj[]>;
  selectAll: () => void;
  deselectAll: () => void;
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
  goToGalleryThenCollection: (gallery: GalleryObj) => void;
  takeScreenshot: () => void;
  updateHideUI: (hide: boolean) => void;
  saveItemsAction: () => void;
  sortIdeas: () => void;
}

export const ContextForSpacesSpace = createContext({} as Controller);

export enum SpacesSpaceSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesSpaceInteractionMode {
  CURSOR = 'Cursor',
  SELECTOR = 'Selector',
}

export enum SpacesSpaceBubbleMode {
  OFF = 'OFF',
  ON = 'ON',
}

export enum SpacesSpaceSidebarMediaMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}

export enum SpacesSpaceSidebarContentMode {
  JOURNAL = 'Journal',
  CHAT_SCENE = 'Chat Scene',
  CHAPTERS = 'Chapters',
}

export enum SpacesSpaceSidebarMode {
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
  CHAT = 'Chat',
}

export enum SpacesSpaceLinkMode {
  ON = 'ON',
  OFF = 'OFF',
}

export enum SpacesSpaceDirectoryMode {
  DEFAULT = 'Default',
  DIRECTORY = 'DIRECTORY',
}

export function useControllerForSpacesSpace(): Controller {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceController = useContext(ContextForSpaceMain);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const galleryListController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const ideaRelationshipListController = useContext(
    ContextForIdeaRelationshipListFromScene,
  );
  const [selectedIdeas, setSelectedIdeas] = useState<IdeaObj[]>([]);
  const [bubbleMode, setBubbleMode] = useState<SpacesSpaceBubbleMode>(
    SpacesSpaceBubbleMode.ON,
  );
  const [directoryMode, setDirectoryMode] = useState<SpacesSpaceDirectoryMode>(
    SpacesSpaceDirectoryMode.DEFAULT,
  );
  const [listSceneMode, setListSceneMode] = useState<SpacesSpaceSidebarMode>(
    SpacesSpaceSidebarMode.SCENES,
  );
  const [interactionMode, setInteractionMode] =
    useState<SpacesSpaceInteractionMode>(SpacesSpaceInteractionMode.CURSOR);
  const [listMode, setListMode] = useState<SpacesSpaceSidebarContentMode>(
    SpacesSpaceSidebarContentMode.CHAPTERS,
  );
  const [linkMode, setLinkMode] = useState<SpacesSpaceLinkMode>(
    SpacesSpaceLinkMode.ON,
  );
  const [sidebarMediaMode, changeSidebarMediaMode] = useState(
    SpacesSpaceSidebarMediaMode.Collection,
  );
  const [sidebarVisibility, setSidebarVisibility] = useState(
    SpacesSpaceSidebarVisibility.OPEN,
  );
  const [updateToggle, setUpdateToggle] = useState(false);

  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const [zoom, setZoom] = useState(0.5);

  // Add ref for capturing the screenshot of the container
  const screenshotRef = useRef<HTMLDivElement>(null);

  // State to control the visibility of UI components
  const [hideUI, setHideUI] = useState(false);

  // Function to handle screenshot
  const takeScreenshot = async () => {
    // Hide UI components before taking the screenshot
    setLinkMode(SpacesSpaceLinkMode.ON);
    setBubbleMode(SpacesSpaceBubbleMode.OFF);
    setHideUI(true);

    setTimeout(async () => {
      if (screenshotRef.current) {
        try {
          const canvas = await html2canvas(screenshotRef.current, {
            useCORS: true, // To capture cross-origin images
          });
          const imgData = canvas.toDataURL('image/png'); // Convert to image
          const ctx = canvas.getContext('2d');
          // Create a vertical gradient from slate-950 to purple-950
          const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
          gradient.addColorStop(0, '#0f172a'); // slate-950
          gradient.addColorStop(1, '#3b0764'); // purple-950

          // Apply gradient as background
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

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
          setLinkMode(SpacesSpaceLinkMode.ON);
          setBubbleMode(SpacesSpaceBubbleMode.ON);
        }
      }
    }, 500);
  };

  const distributeIdeasEvenly = async () => {
    const items = ideaListController.state.objs;
    const itemCount = items.length;

    // Calculate optimal rows and columns to form a square-like grid
    const columns = Math.ceil(Math.sqrt(itemCount));
    const rows = Math.ceil(itemCount / columns);

    // Calculate cell width and height based on div dimensions and the number of columns and rows
    const cellWidth = divWidth / columns;
    const cellHeight = divHeight / rows;

    // Calculate padding to center items within each cell, creating flexible gaps
    const editPromises = items.map(async (idea, index) => {
      const ideaWidth = idea.width;
      const ideaHeight = idea.height;

      // Calculate row and column for the current item
      const row = Math.floor(index / columns);
      const col = index % columns;

      // Calculate x and y positions by centering each item within its cell
      const x = col * cellWidth + (cellWidth - ideaWidth) / 2;
      const y = row * cellHeight + (cellHeight - ideaHeight) / 2;

      return ideaListController.actions.editActions.edit(idea.id, {
        x: Math.ceil(x + Math.random() * 50),
        y: Math.ceil(y + Math.random() * 50),
        width: Math.ceil(ideaWidth),
        height: Math.ceil(ideaHeight),
      });
    });

    // Wait for all edit promises to complete
    await Promise.all(editPromises);
    setUpdateToggle(!updateToggle);
  };

  const copyIdeas = async () => {
    const copiedIdeas = await Promise.all(
      selectedIdeas.map(async (idea) =>
        ideaListController.actions.createActions.duplicateWithXY(
          idea,
          idea.x + 100,
          idea.y + 100,
        ),
      ),
    );

    await Promise.all(
      copiedIdeas.map((idea) =>
        activityListController.actions.createActions.createFromChapterSceneIdea(
          loggedInUser.id,
          spaceController.state.objId,
          chapterListController.state.objId,
          sceneListController.state.objId,
          idea.id,
        ),
      ),
    );

    return copiedIdeas;
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

  const saveItems = async () => {
    return await Promise.all(
      ideaListController.state.objs.map(async (idea) => {
        console.log(idea);
        return ideaListController.actions.editActions.edit(idea.id, {
          ...idea,
          x: idea.x,
          y: idea.y,
          width: idea.width,
          height: idea.height,
          scale: idea.scale,
          rotation: idea.rotation,
        });
      }),
    );
  };

  const saveItemsAction = async () => {
    saveItems().then((items) => {
      alert('save all');
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      saveItems();
    }, 10000);

    return () => clearInterval(interval);
  }, [ideaListController.state.objs]);

  useEffect(() => {
    saveItems();
  }, [sceneListController.state.objId]);

  return {
    state: {
      updateToggle,
      directoryMode: directoryMode,
      divWidth: divWidth,
      divHeight: divHeight,
      linkMode: linkMode,
      selectedIdeas: selectedIdeas,
      bubbleMode: bubbleMode,
      interactionMode: interactionMode,
      sidebarMediaMode: sidebarMediaMode,
      sidebarContentMode: listMode,
      sidebarMode: listSceneMode,
      sidebarVisibility: sidebarVisibility,
      screenshotRef: screenshotRef,
      hideUI: hideUI,
      zoom: zoom,
    },
    actions: {
      saveItemsAction: saveItemsAction,
      updateHideUI: (hide: boolean) => setHideUI(hide),
      takeScreenshot: takeScreenshot,
      updateDivWidth: (width) => setDivWidth(width),
      updateDirectoryMode: (mode) => setDirectoryMode(mode),
      updateDivHeight: (height) => setDivHeight(height),
      updateLinkMode: (mode) => setLinkMode(mode),
      updateSelectedIdeas: (ideas) => setSelectedIdeas(ideas),
      updateBubbleMode: (mode) => setBubbleMode(mode),
      updateInteractionMode: (mode) => setInteractionMode(mode),
      updateSidebarContentMode: (mode) => setListMode(mode),
      updateSidebarMode: (mode) => setListSceneMode(mode),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateZoom: (zoom) => setZoom(zoom),
      goToHome: () => {
        changeSidebarMediaMode(SpacesSpaceSidebarMediaMode.Home);
      },
      goToGallery: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpacesSpaceSidebarMediaMode.Gallery);
      },
      goToCollection: (collection: GalleryCollectionObj) => {
        collectionListController.actions.stateActions.select(collection);
        changeSidebarMediaMode(SpacesSpaceSidebarMediaMode.Collection);
      },
      goToGalleryThenCollection: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpacesSpaceSidebarMediaMode.Collection);
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
      copyIdeas: copyIdeas,
      sortIdeas: distributeIdeasEvenly,
    },
  };
}
