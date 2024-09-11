import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { useControllerForSpaceIdeaRelationshipListFromChapter } from '@/(server)/controller/space/relationship/list-from-chapter';
import { TextElem, TextElemVariant } from '@/(server)/model/elements/text/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { useContext, useEffect, useState } from 'react';
import { spaceMap } from '../../../../map';
import { ContextForSpacesSpace } from '../../controller/main';
import { GenerateTabsRow } from './tabs/main';
import { GenerateTab } from './tabs/tab/main';
import { GenerateTabBlueShard } from './tabs/tab/shard/blue/main';
import { GenerateTabGreenShard } from './tabs/tab/shard/green/main';
import { GenerateTabOrangeShard } from './tabs/tab/shard/orange/main';
import { GenerateTabPurpleShard } from './tabs/tab/shard/purple/main';
import { GenerateTabText } from './tabs/tab/text/main';

export function SpacesSpaceGenerateMapModal() {
  const user = useGlobalUser((state) => state.user);
  const loadingController = useContext(ContextForLoading);
  const {
    actions: { summariseConversationIntoNotes },
  } = useContext(ContextForSpacesSpace);
  const openableController = useContext(ContextForOpenable);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const spaceIdeaRelationshipListController =
    useControllerForSpaceIdeaRelationshipListFromChapter(
      chapterListController.state.objId,
    );
  const [stickies, setStickies] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (openableController.opened) {
      loadingController.loadingController.open();
      summariseConversationIntoNotes().then((stickies) => {
        setStickies(stickies.map((sticky) => sticky.text));
        searchArticles('how to create a map').then(() => {
          loadingController.loadingController.close();
        });
      });
    }
  }, [openableController.opened]);

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

    const ideas = await Promise.all(
      stickies.map(async (sticky, index) => {
        const title = `Step ${index + 1}`;
        const description = sticky;
        const text = sticky;
        const variant = TextElemVariant.STICKY;

        return ideaListController.actions.createActions.createFromText(
          user.id,
          sceneListController.state.objId,
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
        return spaceIdeaRelationshipListController.actions.createActions.createFromIdea(
          idea,
          toIdea,
          spaceController.state.objId,
          chapterListController.state.objId,
          sceneListController.state.objId,
        );
      }),
    );

    window.location.href = spaceMap.space.id.map.link(
      spaceController.state.objId,
    );
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

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <div
          className='aspect-video h-4/5 flex-shrink-0'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <GlassWindowFrame
            className='h-full w-full overflow-auto bg-gradient-to-b from-slate-950 to-purple-950 p-[2rem]'
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[2rem] overflow-auto'>
              <GenerateTabsRow>
                <GenerateTab>
                  <GenerateTabText active={true}>Search</GenerateTabText>
                  <GenerateTabBlueShard active={true} />
                </GenerateTab>
                <GenerateTab>
                  <GenerateTabText active={true}>Search</GenerateTabText>
                  <GenerateTabOrangeShard active={true} />
                </GenerateTab>
                <GenerateTab>
                  <GenerateTabText active={true}>Search</GenerateTabText>
                  <GenerateTabPurpleShard active={true} />
                </GenerateTab>
                <GenerateTab>
                  <GenerateTabText active={true}>Search</GenerateTabText>
                  <GenerateTabGreenShard active={true} />
                </GenerateTab>
              </GenerateTabsRow>
              <div className='flex w-full flex-col space-y-[2rem]'>
                {searchResults.map((result) => (
                  <GlassWindowFrame roundedFx={roundedFx.rounded}>
                    <GlassWindowContents>
                      <div className='flex flex-row items-center space-x-[3rem] font-bold text-slate-300'>
                        <img
                          src={result.pagemap.cse_image?.at(0).src}
                          className='aspect-video w-[300px] rounded-[2rem]'
                        />
                        <div>{result.title}</div>
                        <div>{result.snippet}</div>
                      </div>
                    </GlassWindowContents>
                  </GlassWindowFrame>
                ))}
                {/* <div className='grid w-full grid-cols-3 gap-[1rem]'>
                  {stickies.map((sticky, index) => (
                    <div className='aspect-square bg-yellow-500 p-[1rem]'>
                      <textarea
                        className='h-full w-full resize-none bg-transparent font-bold outline-none'
                        value={sticky}
                        onChange={(e) => editSticky(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div> */}
                <button onClick={createMap}>Next</button>
              </div>
            </GlassWindowContents>
          </GlassWindowFrame>
        </div>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
