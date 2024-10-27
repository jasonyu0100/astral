import { AstralRoundedActionButton } from '@/components/button/action/main';
import { CustomisableModalContents } from '@/components/modal/general/container/main';
import { CustomisableModal } from '@/components/modal/general/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import {
  ContextForGenerateSceneController,
  GenerateSceneTab,
  useGenerateSceneController,
} from './controller/main';
import { SpacesChatSearchArticlesContent } from './pages/articles/main';
import { SpacesChatSearchImageryContent } from './pages/imagery/main';
import { SpacesChatSearchMediaContent } from './pages/media/main';
import { SpacesChatSearchTextContent } from './pages/text/main';
import { SpacesChatConstellationTabs } from './tabs/main';

export function SpacesChatConstellationModal() {
  const openableController = useContext(ContextForOpenable);
  const generateSceneController = useGenerateSceneController();

  return (
    <ContextForOpenable.Provider value={openableController}>
      <ContextForGenerateSceneController.Provider
        value={generateSceneController}
      >
        <CustomisableModal>
          <CustomisableModalContents className='w-full'>
            <div
              className='flex w-full flex-col justify-center'
              style={{ height: '100%' }}
            >
              <div className='flex flex-row items-center space-x-[2rem]'>
                <div
                  className='flex w-full flex-row items-center justify-center space-x-[2rem] overflow-auto'
                  style={{ height: '800px' }}
                >
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.TEXT && <SpacesChatSearchTextContent />}
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.ARTICLES && (
                    <SpacesChatSearchArticlesContent />
                  )}
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.IMAGERY && (
                    <SpacesChatSearchImageryContent />
                  )}
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.MEDIA && <SpacesChatSearchMediaContent />}
                </div>
                <AstralRoundedActionButton
                  className='h-[5rem] w-[5rem]'
                  onClick={() => {
                    generateSceneController.actions.createMap();
                  }}
                >
                  <AstralArrowForwardIcon />
                </AstralRoundedActionButton>
              </div>
              <SpacesChatConstellationTabs />
            </div>
          </CustomisableModalContents>
        </CustomisableModal>
      </ContextForGenerateSceneController.Provider>
    </ContextForOpenable.Provider>
  );
}
