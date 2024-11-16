import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  UrlElement,
  UrlElementVariant,
} from '@/architecture/model/elements/url/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { getUrlIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesIdeasAddWebsiteUrlModal() {
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
      title: title,
      url: websiteUrl,
      variant: UrlElementVariant.WEBSITE,
    } as UrlElement;

    const { width, height } = getUrlIdeaBounds(urlIdea);

    const idea =
      await ideaListController.actions.createActions.createIdeaFromUrlElement(
        user.id,
        sceneListController.state.objId,
        '',
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line from being added
      createIdea();
    }
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex flex-col space-y-[1rem]'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <AstralModalStep>1</AstralModalStep>
              <AstralTextLineInput
                className='w-[400px]'
                placeholder='Enter a url'
                onChange={(e) => changeWebsiteUrl(e.target.value)}
              />
            </div>
            {websiteUrl && (
              <div className='flex flex-row items-center space-x-[1rem]'>
                <AstralModalStep>2</AstralModalStep>
                <AstralTextLineInput
                  placeholder='Enter a label'
                  onChange={(e) => changeTitle(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            )}
          </div>
          {websiteUrl && (
            <AstralRoundedActionButton onClick={createIdea}>
              <AstralCheckIcon />
            </AstralRoundedActionButton>
          )}
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
