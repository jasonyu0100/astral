import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { UrlElem, UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { AstralModalStep } from '@/ui/step/main';
import { getUrlIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesMapAddSpotifyUrlModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const user = useContext(ContextForLoggedInUserObj);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );
  const [variant, changeVariant] = useState<string>(UrlElemVariant.YOUTUBE);
  const [title, changeTitle] = useState('');
  const [spotifyId, changeSpotifyId] = useState('');
  const [description, changeDescription] = useState<string>('');

  function extractSpotifyTrackId(url: string) {
    // Regular expression pattern to match Spotify track IDs
    const pattern = /\/track\/(\w+)/;

    // Find the track ID using the regular expression pattern
    const match = url.match(pattern);

    if (match) {
      const trackId = match[1];
      return trackId;
    } else {
      return url;
    }
  }

  async function createIdeaFromSpotify() {
    const urlIdea = {
      id: crypto.randomUUID(),
      title: `Spotify ${spotifyId}`,
      url: `https://open.spotify.com/embed/track/${spotifyId}`,
      variant: UrlElemVariant.SPOTIFY,
    } as UrlElem;

    const { width, height } = await getUrlIdeaBounds(urlIdea);

    const idea =
      await ideaListController.actions.createActions.createIdeaFromUrlElement(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        0,
        0,
        width,
        height,
        {
          id: crypto.randomUUID(),
          title: `Spotify ${spotifyId}`,
          url: `https://open.spotify.com/embed/track/${spotifyId}`,
          variant: UrlElemVariant.SPOTIFY,
        } as UrlElem,
        ideaListController.state.objs.length,
      );
    await activityListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      sceneListController.state.objId,
      idea.id,
    );
  }

  async function createIdea() {
    await createIdeaFromSpotify();
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents className='h-1/2'>
          <div className='flex flex-row items-center space-x-[4rem]'>
            <div className='flex flex-row items-center space-x-[2rem]'>
              <AstralModalStep>1</AstralModalStep>
              <input
                placeholder='https://open.spotify.com/embed/track/14I47nVJiJt9NCzt7YmnWz'
                defaultValue='https://open.spotify.com/embed/track/14I47nVJiJt9NCzt7YmnWz'
                title='Url'
                value={spotifyId}
                onChange={(e) =>
                  changeSpotifyId(extractSpotifyTrackId(e.target.value))
                }
                className='h-[3rem] w-full flex-shrink-0 border-b border-slate-300 border-opacity-30 bg-transparent text-slate-300 outline-none'
              />
            </div>
            {spotifyId && (
              <>
                <div className='flex flex-row items-center space-x-[2rem]'>
                  <AstralModalStep>2</AstralModalStep>
                  <div className='max-h-[400px] w-full'>
                    <iframe
                      src={`https://open.spotify.com/embed/track/${spotifyId}`}
                      style={{ width: '100%', height: '400px' }}
                      allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                      loading='lazy'
                    />
                  </div>
                </div>
                <div className='flex flex-row items-center space-x-[2rem]'>
                  <div
                    onClick={createIdea}
                    className='flex h-[4rem] w-[4rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'
                  >
                    <AstralArrowForwardIcon />
                  </div>
                  <p className='text-2xl font-bold text-slate-300'>
                    Add Spotify
                  </p>
                </div>
              </>
            )}
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
