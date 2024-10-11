import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { UrlElem, UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { CustomisableModalHalfContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { useContext, useState } from 'react';

export function SpacesMapAddUrlIdeaModal() {
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
  const [youtubeId, changeYoutubeId] = useState('');
  const [description, changeDescription] = useState<string>('');
  // const [start, changeStart] = useState('0');
  // const [end, changeEnd] = useState('10');

  function extractVideoId(url: string) {
    // Regular expression pattern to match YouTube video IDs
    const pattern =
      /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Find the video ID using the regular expression pattern
    const match = url.match(pattern);

    if (match) {
      const videoId = match[1];
      return videoId;
    } else {
      return url;
    }
  }

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

  async function createIdeaFromYouTube() {
    const idea = await ideaListController.actions.createActions.createFromUrl(
      user.id,
      sceneListController.state.objId,
      title,
      description,
      0,
      0,
      150,
      150,
      {
        id: crypto.randomUUID(),
        title: `Youtube ${youtubeId}`,
        url: `https://www.youtube.com/embed/${youtubeId}`,
        variant: UrlElemVariant.YOUTUBE,
      } as UrlElem,
      ideaListController.state.objs.length,
    );
    await activityListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      ideaListController.state.objId,
      idea.id,
    );
  }

  async function createIdeaFromSpotify() {
    const idea = await ideaListController.actions.createActions.createFromUrl(
      user.id,
      ideaListController.state.objId,
      title,
      description,
      0,
      0,
      150,
      150,
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
      ideaListController.state.objId,
      idea.id,
    );
  }

  async function createIdea() {
    if (variant === UrlElemVariant.YOUTUBE) {
      await createIdeaFromYouTube();
    } else if (variant === UrlElemVariant.SPOTIFY) {
      await createIdeaFromSpotify();
    }
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalHalfContents>
          <div className='flex flex-col space-y-[2rem]'>
            <div className='h-[400px] w-[500px]'>
              <iframe
                onDrag={(e) => e.stopPropagation()}
                style={{ width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${youtubeId}?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
                title='YouTube video player'
              />
            </div>
            <input
              placeholder='Enter a youtube url'
              className='h-[3rem] w-full flex-shrink-0 border-b border-slate-300 border-opacity-30 bg-transparent outline-none'
              onChange={(e) => changeYoutubeId(extractVideoId(e.target.value))}
            />
          </div>
          <div
            onClick={createIdea}
            className='flex h-[5rem] w-[5rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'
          >
            <AstralArrowForwardIcon />
          </div>
        </CustomisableModalHalfContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}

// {variant === UrlElemVariant.SPOTIFY && (
//   <>
//     <FormInput
//       placeholder='https://open.spotify.com/embed/track/14I47nVJiJt9NCzt7YmnWz'
//       title='Url'
//       value={spotifyId}
//       onChange={(e) =>
//         changeSpotifyId(extractSpotifyTrackId(e.target.value))
//       }
//     />
//     {spotifyId && (
//       <div className='max-h-[400px] w-full'>
//         <iframe
//           src={`https://open.spotify.com/embed/track/${spotifyId}`}
//           style={{ width: '100%', height: '400px' }}
//           allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
//           loading='lazy'
//         />
//       </div>
//     )}
//   </>
// )}
