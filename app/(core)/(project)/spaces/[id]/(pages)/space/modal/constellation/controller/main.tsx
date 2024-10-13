import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { useControllerForSceneIdeaList } from '@/(server)/controller/idea/list';
import { useControllerForIdeaRelationshipListFromChapter } from '@/(server)/controller/idea/relationship/list-from-chapter';
import { useControllerForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { TextElemVariant } from '@/(server)/model/elements/text/main';
import { TextElem } from '@/graphql/API';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { createContext, useContext, useEffect, useState } from 'react';
import { ContextForSpacesSpace } from '../../../controller/main';

export enum GenerateSceneTab {
  TEXT = 'Text',
  ARTICLES = 'Articles',
  MEDIA = 'Media',
  IMAGERY = 'Imagery',
  VAULT = 'Vault',
}

interface ControllerState {
  tab: GenerateSceneTab;
  stickies: string[];
  searchResults: any[];
  searchQuery: string;
}

interface ControllerActions {
  createMap: () => Promise<void>;
  editSticky: (index: number, text: string) => void;
  updateTab: (tab: GenerateSceneTab) => void;
  updateQuery: (query: string) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForGenerateSceneController = createContext(
  {} as Controller,
);

export function useGenerateSceneController(): Controller {
  const user = useGlobalUser((state) => state.user);
  const [tab, setTab] = useState(GenerateSceneTab.TEXT);
  const [stickies, setStickies] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const loadingController = useContext(ContextForLoading);
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  const openableController = useContext(ContextForOpenable);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useControllerForIdeaSceneList('');
  const ideaListController = useControllerForSceneIdeaList('');
  const ideaRelationshipListController =
    useControllerForIdeaRelationshipListFromChapter(
      chapterListController.state.objId,
    );

  useEffect(() => {
    if (openableController.opened) {
      loadingController.loadingController.open();
      if (tab === GenerateSceneTab.TEXT) {
        spacesSpaceController.actions
          .summariseConversationIntoNotes()
          .then((stickies) => {
            setStickies(stickies.map((sticky) => sticky.text));
            loadingController.loadingController.close();
          });
      } else if (tab === GenerateSceneTab.ARTICLES) {
        spacesSpaceController.actions
          .summariseConversationIntoQuery()
          .then((query) => {
            setSearchQuery(query);
            searchArticles(query).then(() => {
              loadingController.loadingController.close();
            });
          });
      } else if (tab === GenerateSceneTab.IMAGERY) {
        searchArticles('how to create a map').then(() => {
          loadingController.loadingController.close();
        });
      } else if (tab === GenerateSceneTab.MEDIA) {
        searchArticles('how to create a map').then(() => {
          loadingController.loadingController.close();
        });
      } else if (tab === GenerateSceneTab.VAULT) {
        searchArticles('how to create a map').then(() => {
          loadingController.loadingController.close();
        });
      } else {
        loadingController.loadingController.open();
      }
    }
  }, [openableController.opened, tab]);

  const searchArticles = async (query: string) => {
    const searchEngineId = '4562e5a04e0824515';
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setSearchResults(data.items || []);
      return data.items || []; // Return the array of search results, or an empty array if none
    } catch (error) {
      console.error('Error fetching data from Google Custom Search API', error);
      return [];
    }
  };

  async function createMap() {
    openableController.close();
    loadingController.loadingController.open();

    const newScene =
      await sceneListController.actions.createActions.createScene(
        'Map',
        'A map of the scene',
        'A map of the scene',
        user.id,
        chapterListController.state.objId,
      );

    const ideas = await Promise.all(
      stickies.map(async (sticky, index) => {
        const title = `Step ${index + 1}`;
        const description = sticky;
        const text = sticky;
        const variant = TextElemVariant.STICKY;

        return ideaListController.actions.createActions.createFromText(
          user.id,
          newScene.id,
          title,
          description,
          index * 200, // Adjust position based on index
          0,
          150,
          150,
          {
            id: crypto.randomUUID(),
            title: title,
            text: text,
            variant: variant,
          } as TextElem,
          ideaListController.state.objs.length,
        );
      }),
    );

    const ideaRelationships = await Promise.all(
      ideas.slice(0, ideas.length - 1).map((idea, index) => {
        const toIdea = ideas[index + 1];
        return ideaRelationshipListController.actions.createActions.createFromIdea(
          idea,
          toIdea,
          spaceController.state.objId,
          chapterListController.state.objId,
          newScene.id,
        );
      }),
    );

    window.location.href = `${spacesMap.spaces.id.map.link(
      spaceController.state.objId,
    )}?chapter=${chapterListController.state.objId}&scene=${newScene.id}`;
  }

  function editSticky(index: number, text: string) {
    setStickies(
      stickies.map((sticky, i) => {
        if (i === index) {
          return text;
        }
        return sticky;
      }),
    );
  }

  return {
    state: {
      tab,
      searchQuery: searchQuery,
      stickies,
      searchResults,
    },
    actions: {
      updateTab: (tab: GenerateSceneTab) => setTab(tab),
      updateQuery: (query: string) => setSearchQuery(query),
      createMap,
      editSticky,
    },
  };
}
