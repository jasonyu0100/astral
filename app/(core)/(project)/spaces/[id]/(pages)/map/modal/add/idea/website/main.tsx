import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { UrlElem, UrlElemVariant } from '@/(server)/model/elements/url/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralButtonRoundedAction } from '@/components/button/action/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { CustomisableModalContents } from '@/components/modal/general/container/main';
import { CustomisableModal } from '@/components/modal/general/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { getUrlIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesMapAddWebsiteUrlModal() {
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
  const [websiteUrl, changeWebsiteUrl] = useState('');
  const [description, changeDescription] = useState<string>('');

  async function createIdeaFromWebsite() {
    const urlIdea = {
      id: crypto.randomUUID(),
      title: websiteUrl,
      url: websiteUrl,
      variant: UrlElemVariant.WEBSITE,
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
    await createIdeaFromWebsite();
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <>
              <AstralModalStep>1</AstralModalStep>
              <AstralTextLineInput
                placeholder='Enter a website url'
                onChange={(e) => changeWebsiteUrl(e.target.value)}
              />
            </>
            {websiteUrl && (
              <>
                <AstralModalStep>2</AstralModalStep>
                <AstralTextLineInput
                  placeholder='Enter a title'
                  onChange={(e) => changeTitle(e.target.value)}
                />
              </>
            )}
            {websiteUrl && (
              <AstralButtonRoundedAction
                onClick={createIdea}
                className='h-[4rem] w-[4rem]'
              >
                <AstralCheckIcon />
              </AstralButtonRoundedAction>
            )}
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
