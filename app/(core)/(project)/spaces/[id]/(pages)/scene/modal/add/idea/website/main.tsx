import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import {
  UrlElement,
  UrlElementVariant,
} from '@/server/model/elements/url/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { getUrlIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesSceneAddWebsiteUrlModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const user = useContext(ContextForLoggedInUserObj);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const [title, changeTitle] = useState('');
  const [websiteUrl, changeWebsiteUrl] = useState('');
  const [description, changeDescription] = useState<string>('');

  async function createIdeaFromWebsite() {
    const urlIdea = {
      id: crypto.randomUUID(),
      title: websiteUrl,
      url: websiteUrl,
      variant: UrlElementVariant.WEBSITE,
    } as UrlElement;

    const { width, height } = await getUrlIdeaBounds(urlIdea);

    const idea =
      await ideaListController.actions.createActions.createIdeaFromUrlElement(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        Math.ceil(Math.random() * 200),
        Math.ceil(Math.random() * 200),
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
      <AstralModal>
        <AstralModalBodyWrapper>
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
              <AstralRoundedActionButton
                onClick={createIdea}
                className='h-[4rem] w-[4rem]'
              >
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            )}
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
