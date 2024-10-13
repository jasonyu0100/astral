import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { UrlElem, UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { AstralButtonRoundedAction } from '@/ui/button/rounded/action/main';
import { AstralTextInput } from '@/ui/input/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { useContext, useState } from 'react';

export function SpacesMapAddYouTubeUrlModal() {
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
  const [youtubeId, changeYoutubeId] = useState('');
  const [description, changeDescription] = useState<string>('');

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

  async function createIdea() {
    await createIdeaFromYouTube();
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents className='h-1/3 space-x-[2rem]'>
          {!youtubeId && (
            <AstralTextInput
              placeholder='Enter a YouTube url e.g https://www.youtube.com/watch?v=...'
              onChange={(e) => changeYoutubeId(extractVideoId(e.target.value))}
            />
          )}
          {youtubeId && (
            <div className='flex flex-col items-center space-y-[2rem]'>
              <iframe
                onDrag={(e) => e.stopPropagation()}
                className='aspect-video'
                style={{ width: '500px' }}
                src={`https://www.youtube.com/embed/${youtubeId}?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
                title='YouTube video player'
              />
              <div className='flex flex-row space-x-[2rem]'>
                <AstralButtonRoundedAction
                  onClick={() => changeYoutubeId('')}
                  className='bg-gradient-to-br from-slate-600 to-slate-400'
                >
                  <AstralCloseIcon />
                </AstralButtonRoundedAction>
                <AstralButtonRoundedAction onClick={createIdea}>
                  <AstralCheckIcon />
                </AstralButtonRoundedAction>
              </div>
            </div>
          )}
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
