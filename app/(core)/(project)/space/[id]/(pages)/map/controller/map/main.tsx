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
  divWidth: number;
  divHeight: number;
  selectedIdeas: SceneIdeaObj[];
  connectionMode: SpaceMapConnectionMode;
  mapMode: SpaceMapInteractionMode;
  sidebarMediaMode: SpaceMapSidebarMediaMode;
  sidebarContentMode: SpaceMapSidebarContentMode;
  listSceneMode: SpaceMapSidebarListMode;
  peopleMode: SpaceMapPeopleMode;
}

interface ControllerActions {
  autoSort: () => void;
  updateDivWidth: (width: number) => void;
  updateDivHeight: (height: number) => void;
  updateConnectionMode: (mode: SpaceMapConnectionMode) => void;
  updatePeopleMode: (mode: SpaceMapPeopleMode) => void;
  updateSelectedIdeas: (ideas: SceneIdeaObj[]) => void;
  updateMapMode: (mode: SpaceMapInteractionMode) => void;
  updateSidebarMode: (mode: SpaceMapSidebarContentMode) => void;
  updateListSceneMode: (mode: SpaceMapSidebarListMode) => void;
  checkContainsSelectedIdea: (ideaObj: SceneIdeaObj) => boolean;
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
}

export const ContextForSpaceMap = createContext({} as Controller);

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
  LIST = 'List',
}

export enum SpaceMapSidebarListMode {
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
}

export enum SpaceMapConnectionMode {
  DEFAULT = 'Default',
  BUBBLE = 'Bubble',
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
  const [listSceneMode, setListSceneMode] = useState<SpaceMapSidebarListMode>(
    SpaceMapSidebarListMode.SCENES,
  );
  const [mapMode, setMode] = useState<SpaceMapInteractionMode>(
    SpaceMapInteractionMode.SELECTED,
  );
  const [listMode, setListMode] = useState<SpaceMapSidebarContentMode>(
    SpaceMapSidebarContentMode.LIST,
  );
  const [connectionMode, setConnectionMode] = useState<SpaceMapConnectionMode>(
    SpaceMapConnectionMode.DEFAULT,
  );
  const [sidebarMediaMode, changeSidebarMediaMode] = useState(
    SpaceMapSidebarMediaMode.Collection,
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

    const ideaWidth = Math.round(availableWidth / columns);
    const ideaHeight = Math.round(availableHeight / rows);

    loadingController.loadingController.open();

    const editPromises = ideaListController.state.objs.map(
      async (idea, index) => {
        const x = Math.round((index % columns) * (ideaWidth + gapWidth));
        const y = Math.round(
          Math.floor(index / columns) * (ideaHeight + gapHeight),
        );

        return ideaListController.actions.editActions.edit(idea.id, {
          x: x,
          y: y,
          height: ideaHeight,
          width: ideaWidth,
        });
      },
    );

    // Wait for all the promises to complete
    await Promise.all(editPromises);

    // Close the modal after all updates are complete
    loadingController.loadingController.close();
  };

  return {
    state: {
      divWidth: divWidth,
      divHeight: divHeight,
      connectionMode: connectionMode,
      selectedIdeas: selectedIdeas,
      peopleMode: peopleMode,
      mapMode: mapMode,
      sidebarMediaMode: sidebarMediaMode,
      sidebarContentMode: listMode,
      listSceneMode: listSceneMode,
    },
    actions: {
      autoSort: autoSort,
      updateDivWidth: (width) => setDivWidth(width),
      updateDivHeight: (height) => setDivHeight(height),
      updateConnectionMode: (mode) => setConnectionMode(mode),
      updateSelectedIdeas: (ideas) => setSelectedIdeas(ideas),
      updatePeopleMode: (mode) => setPeopleMode(mode),
      updateMapMode: (mode) => setMode(mode),
      updateSidebarMode: (mode) => setListMode(mode),
      updateListSceneMode: (mode) => setListSceneMode(mode),
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
    },
  };
}
