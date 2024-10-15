import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { UrlElem, UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { AstralButtonRoundedAction } from '@/ui/button/action/main';
import { AstralTextLineInput } from '@/ui/input/line/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { AstralModalStep } from '@/ui/step/main';
import { getUrlIdeaBounds } from '@/utils/bounds';
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
    const urlIdea = {
      id: crypto.randomUUID(),
      title: `Youtube ${youtubeId}`,
      url: `https://www.youtube.com/embed/${youtubeId}`,
      variant: UrlElemVariant.YOUTUBE,
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
        urlIdea,
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
        <CustomisableModalContents className='h-1/2'>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <AstralModalStep>1</AstralModalStep>
            <AstralTextLineInput
              placeholder='Enter a YouTube url e.g https://www.youtube.com/watch?v=...'
              onChange={(e) => changeYoutubeId(extractVideoId(e.target.value))}
            />
          </div>
          {youtubeId && (
            <div className='flex flex-row items-center space-x-[2rem]'>
              <AstralModalStep>2</AstralModalStep>
              <iframe
                onDrag={(e) => e.stopPropagation()}
                className='aspect-video'
                style={{ width: '500px' }}
                src={`https://www.youtube.com/embed/${youtubeId}?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
                title='YouTube video player'
              />
            </div>
          )}
          {youtubeId && (
            <div className='flex flex-row items-center space-x-[2rem]'>
              <AstralButtonRoundedAction
                onClick={createIdea}
                className='h-[4rem] w-[4rem]'
              >
                <AstralCheckIcon />
              </AstralButtonRoundedAction>
              <p className='text-2xl font-bold text-slate-300'>Add YouTube</p>
            </div>
          )}
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
