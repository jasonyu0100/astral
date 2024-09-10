import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { GalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { GalleryObj } from '@/(server)/model/gallery/main';
import { SceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { createContext, useContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  isSwitchOn: boolean;
  divWidth: number;
  divHeight: number;
  selectedIdeas: SceneIdeaObj[];
  directoryMode: SpaceMapDirectoryMode;
  connectionMode: SpaceMapConnectionMode;
  mapMode: SpaceMapInteractionMode;
  sidebarMediaMode: SpaceMapSidebarMediaMode;
  sidebarContentMode: SpaceMapSidebarContentMode;
  sidebarMode: SpaceMapSidebarMode;
  sidebarVisibility: SpaceMapSidebarVisibility;
  peopleMode: SpaceMapPeopleMode;
}

interface ControllerActions {
  autoSort: () => void;
  getAvailableXYWH: () => {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  updateDirectoryMode: (mode: SpaceMapDirectoryMode) => void;
  updateDivWidth: (width: number) => void;
  updateDivHeight: (height: number) => void;
  updateConnectionMode: (mode: SpaceMapConnectionMode) => void;
  updatePeopleMode: (mode: SpaceMapPeopleMode) => void;
  updateSelectedIdeas: (ideas: SceneIdeaObj[]) => void;
  updateInteractionMode: (mode: SpaceMapInteractionMode) => void;
  updateSidebarContentMode: (mode: SpaceMapSidebarContentMode) => void;
  updateSidebarMode: (mode: SpaceMapSidebarMode) => void;
  checkContainsSelectedIdea: (ideaObj: SceneIdeaObj) => boolean;
  updateSidebarVisibility: (visibility: SpaceMapSidebarVisibility) => void;
  selectAll: () => void;
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
}

export const ContextForSpaceMap = createContext({} as Controller);

export enum SpaceMapSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpaceMapInteractionMode {
  CURSOR = 'Cursor',
  SELECTED = 'Selected',
}

export enum SpaceMapIdeaMode {
  DEFAULT = 'Default',
  INFORMATION = 'Information',
}

export enum SpaceMapPeopleMode {
  OFF = 'OFF',
  ON = 'ON',
}

export enum SpaceMapSidebarMediaMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}

export enum SpaceMapSidebarContentMode {
  MEDIA = 'Media',
  SEARCH = 'Search',
  LIST = 'List',
  CHAT = 'Chat',
}

export enum SpaceMapSidebarMode {
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
  CHAT = 'Chat',
}

export enum SpaceMapConnectionMode {
  DEFAULT = 'Default',
  BUBBLE = 'Bubble',
}

export enum SpaceMapDirectoryMode {
  DEFAULT = 'Default',
  DIRECTORY = 'DIRECTORY',
}

export function useControllerForSpaceMap(): Controller {
  const loadingController = useContext(ContextForLoading);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const galleryListController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const [selectedIdeas, setSelectedIdeas] = useState<SceneIdeaObj[]>([]);
  const [peopleMode, setPeopleMode] = useState<SpaceMapPeopleMode>(
    SpaceMapPeopleMode.OFF,
  );
  const [directoryMode, setDirectoryMode] = useState<SpaceMapDirectoryMode>(
    SpaceMapDirectoryMode.DEFAULT,
  );
  const [isSwitchOn, setSwitch] = useState(false);
  const [listSceneMode, setListSceneMode] = useState<SpaceMapSidebarMode>(
    SpaceMapSidebarMode.SCENES,
  );
  const [mapMode, setMode] = useState<SpaceMapInteractionMode>(
    SpaceMapInteractionMode.SELECTED,
  );
  const [listMode, setListMode] = useState<SpaceMapSidebarContentMode>(
    SpaceMapSidebarContentMode.MEDIA,
  );
  const [connectionMode, setConnectionMode] = useState<SpaceMapConnectionMode>(
    SpaceMapConnectionMode.DEFAULT,
  );
  const [sidebarMediaMode, changeSidebarMediaMode] = useState(
    SpaceMapSidebarMediaMode.Collection,
  );
  const [sidebarVisibility, setSidebarVisibility] = useState(
    SpaceMapSidebarVisibility.OPEN,
  );

  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  const autoSort = async (gapPercentage = 5) => {
    const totalIdeas = ideaListController.state.objs.length;
    const columns = Math.ceil(Math.sqrt(totalIdeas));
    const rows = Math.ceil(totalIdeas / columns);

    const gapWidth = (divWidth * gapPercentage) / 100;
    const gapHeight = (divHeight * gapPercentage) / 100;

    const availableWidth = divWidth - gapWidth * (columns - 1);
    const availableHeight = divHeight - gapHeight * (rows - 1);

    // Calculate square size by taking the minimum of availableWidth/columns and availableHeight/rows
    const ideaSize = Math.min(
      Math.round(availableWidth / columns),
      Math.round(availableHeight / rows),
    );

    loadingController.loadingController.open();

    const editPromises = ideaListController.state.objs.map(
      async (idea, index) => {
        const x = Math.round((index % columns) * (ideaSize + gapWidth));
        const y = Math.round(
          Math.floor(index / columns) * (ideaSize + gapHeight),
        );

        return ideaListController.actions.editActions.edit(idea.id, {
          x: x,
          y: y,
          height: ideaSize, // Set height to the square size
          width: ideaSize, // Set width to the square size
        });
      },
    );

    // Wait for all the promises to complete
    await Promise.all(editPromises);

    // Close the modal after all updates are complete
    loadingController.loadingController.close();
    setSwitch(!isSwitchOn);
  };

  const getAvailableXYWH = () => {
    const totalIdeas = ideaListController.state.objs.length;
    const columns = Math.ceil(Math.sqrt(totalIdeas + 1)); // Add 1 to account for the new item
    const rows = Math.ceil((totalIdeas + 1) / columns);

    const gapWidth = (divWidth * 5) / 100; // Assuming 5% gap
    const gapHeight = (divHeight * 5) / 100; // Assuming 5% gap

    const availableWidth = divWidth - gapWidth * (columns - 1);
    const availableHeight = divHeight - gapHeight * (rows - 1);

    let ideaWidth = Math.round(availableWidth / columns);
    let ideaHeight = Math.round(availableHeight / rows);

    // Set maxWidth and maxHeight to 25% of total divHeight
    const maxDimension = Math.round(divHeight * 0.25);

    // Ensure the calculated width and height do not exceed maxDimension
    ideaWidth = Math.min(ideaWidth, maxDimension);
    ideaHeight = Math.min(ideaHeight, maxDimension);

    // Make width and height identical to maintain a square aspect ratio
    const squareSize = Math.min(ideaWidth, ideaHeight);
    ideaWidth = squareSize;
    ideaHeight = squareSize;

    // Find the next available grid position
    const nextIndex = totalIdeas;
    const x = Math.round((nextIndex % columns) * (ideaWidth + gapWidth));
    const y = Math.round(
      Math.floor(nextIndex / columns) * (ideaHeight + gapHeight),
    );

    // Ensure that the new item fits within the available width and height
    if (x + ideaWidth <= divWidth && y + ideaHeight <= divHeight) {
      return { x, y, width: ideaWidth, height: ideaHeight };
    }

    // Otherwise, place it in the center of the div
    const centerX = Math.round((divWidth - ideaWidth) / 2);
    const centerY = Math.round((divHeight - ideaHeight) / 2);

    return { x: centerX, y: centerY, width: ideaWidth, height: ideaHeight };
  };

  return {
    state: {
      directoryMode: directoryMode,
      isSwitchOn: isSwitchOn,
      divWidth: divWidth,
      divHeight: divHeight,
      connectionMode: connectionMode,
      selectedIdeas: selectedIdeas,
      peopleMode: peopleMode,
      mapMode: mapMode,
      sidebarMediaMode: sidebarMediaMode,
      sidebarContentMode: listMode,
      sidebarMode: listSceneMode,
      sidebarVisibility: sidebarVisibility,
    },
    actions: {
      autoSort: autoSort,
      getAvailableXYWH: getAvailableXYWH,
      updateDivWidth: (width) => setDivWidth(width),
      updateDirectoryMode: (mode) => setDirectoryMode(mode),
      updateDivHeight: (height) => setDivHeight(height),
      updateConnectionMode: (mode) => setConnectionMode(mode),
      updateSelectedIdeas: (ideas) => setSelectedIdeas(ideas),
      updatePeopleMode: (mode) => setPeopleMode(mode),
      updateInteractionMode: (mode) => setMode(mode),
      updateSidebarContentMode: (mode) => setListMode(mode),
      updateSidebarMode: (mode) => setListSceneMode(mode),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      checkContainsSelectedIdea: (idea: SceneIdeaObj) =>
        selectedIdeas.map((idea) => idea.id).includes(idea.id),
      goToHome: () => {
        changeSidebarMediaMode(SpaceMapSidebarMediaMode.Home);
      },
      goToGallery: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpaceMapSidebarMediaMode.Gallery);
      },
      goToCollection: (collection: GalleryCollectionObj) => {
        collectionListController.actions.stateActions.select(collection);
        changeSidebarMediaMode(SpaceMapSidebarMediaMode.Collection);
      },
      selectAll: () => {
        setSelectedIdeas(ideaListController.state.objs);
      },
    },
  };
}
