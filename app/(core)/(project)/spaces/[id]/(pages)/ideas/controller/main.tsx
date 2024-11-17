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
  cursorX: number;
  cursorY: number;
  selectedIdeas: IdeaObj[];
  directoryMode: SpacesIdeasDirectoryMode;
  linkMode: SpacesIdeasLinkMode;
  interactionMode: SpacesIdeasInteractionMode;
  sidebarMediaMode: SpacesIdeasSidebarMediaMode;
  sidebarContentMode: SpacesIdeasSidebarContentMode;
  sidebarVisibility: SpacesIdeasSidebarVisibility;
  bubbleMode: SpacesIdeasBubbleMode;
  screenshotRef: React.RefObject<HTMLDivElement>;
  hideUI: boolean;
  zoom: number;
}

interface ControllerActions {
  updateDirectoryMode: (mode: SpacesIdeasDirectoryMode) => void;
  updateDivWidth: (width: number) => void;
  updateDivHeight: (height: number) => void;
  updateLinkMode: (mode: SpacesIdeasLinkMode) => void;
  updateBubbleMode: (mode: SpacesIdeasBubbleMode) => void;
  updateSelectedIdeas: (ideas: IdeaObj[]) => void;
  updateCursorX: (x: number) => void;
  updateCursorY: (y: number) => void;
  updateInteractionMode: (mode: SpacesIdeasInteractionMode) => void;
  updateSidebarContentMode: (mode: SpacesIdeasSidebarContentMode) => void;
  checkContainsSelectedIdea: (ideaObj: IdeaObj) => boolean;
  updateSidebarVisibility: (visibility: SpacesIdeasSidebarVisibility) => void;
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

export const ContextForSpacesIdeas = createContext({} as Controller);

export enum SpacesIdeasSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesIdeasInteractionMode {
  CURSOR = 'Cursor',
  SELECTOR = 'Selector',
}

export enum SpacesIdeasBubbleMode {
  OFF = 'OFF',
  ON = 'ON',
}

export enum SpacesIdeasSidebarMediaMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}

export enum SpacesIdeasSidebarContentMode {
  UPLOADS = 'Uploads',
  CHAT_SCENE = 'Chat Scene',
  CHAPTERS = 'Chapters',
}

export enum SpacesIdeasSidebarMode {
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
  CHAT = 'Chat',
}

export enum SpacesIdeasLinkMode {
  ON = 'ON',
  OFF = 'OFF',
}

export enum SpacesIdeasDirectoryMode {
  DEFAULT = 'Default',
  DIRECTORY = 'DIRECTORY',
}

export function useControllerForSpacesIdeas(): Controller {
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
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [bubbleMode, setBubbleMode] = useState<SpacesIdeasBubbleMode>(
    SpacesIdeasBubbleMode.OFF,
  );
  const [directoryMode, setDirectoryMode] = useState<SpacesIdeasDirectoryMode>(
    SpacesIdeasDirectoryMode.DEFAULT,
  );
  const [listSceneMode, setListSceneMode] = useState<SpacesIdeasSidebarMode>(
    SpacesIdeasSidebarMode.SCENES,
  );
  const [interactionMode, setInteractionMode] =
    useState<SpacesIdeasInteractionMode>(SpacesIdeasInteractionMode.CURSOR);
  const [listMode, setListMode] = useState<SpacesIdeasSidebarContentMode>(
    SpacesIdeasSidebarContentMode.CHAPTERS,
  );
  const [linkMode, setLinkMode] = useState<SpacesIdeasLinkMode>(
    SpacesIdeasLinkMode.ON,
  );
  const [sidebarMediaMode, changeSidebarMediaMode] = useState(
    SpacesIdeasSidebarMediaMode.Collection,
  );
  const [sidebarVisibility, setSidebarVisibility] = useState(
    SpacesIdeasSidebarVisibility.OPEN,
  );
  const [updateToggle, setUpdateToggle] = useState(false);

  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const [zoom, setZoom] = useState(1);

  // Add ref for capturing the screenshot of the container
  const screenshotRef = useRef<HTMLDivElement>(null);

  // State to control the visibility of UI components
  const [hideUI, setHideUI] = useState(false);

  // Function to handle screenshot
  const takeScreenshot = async () => {
    // Hide UI components before taking the screenshot
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
      cursorX: cursorX,
      cursorY: cursorY,
      divWidth: divWidth,
      divHeight: divHeight,
      linkMode: linkMode,
      selectedIdeas: selectedIdeas,
      bubbleMode: bubbleMode,
      interactionMode: interactionMode,
      sidebarMediaMode: sidebarMediaMode,
      sidebarContentMode: listMode,
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
      updateCursorX: (x) => setCursorX(x),
      updateCursorY: (y) => setCursorY(y),
      updateDirectoryMode: (mode) => setDirectoryMode(mode),
      updateDivHeight: (height) => setDivHeight(height),
      updateLinkMode: (mode) => setLinkMode(mode),
      updateSelectedIdeas: (ideas) => setSelectedIdeas(ideas),
      updateBubbleMode: (mode) => setBubbleMode(mode),
      updateInteractionMode: (mode) => setInteractionMode(mode),
      updateSidebarContentMode: (mode) => setListMode(mode),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateZoom: (zoom) => setZoom(zoom),
      goToHome: () => {
        changeSidebarMediaMode(SpacesIdeasSidebarMediaMode.Home);
      },
      goToGallery: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpacesIdeasSidebarMediaMode.Gallery);
      },
      goToCollection: (collection: GalleryCollectionObj) => {
        collectionListController.actions.stateActions.select(collection);
        changeSidebarMediaMode(SpacesIdeasSidebarMediaMode.Collection);
      },
      goToGalleryThenCollection: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpacesIdeasSidebarMediaMode.Collection);
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
