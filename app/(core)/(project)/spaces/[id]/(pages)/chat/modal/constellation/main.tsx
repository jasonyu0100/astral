import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
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
        <AstralModal>
          <AstralModalBodyWrapper className='w-full'>
            <div className='flex w-full flex-col' style={{ height: '100%' }}>
              <AstralModalTitle>Generate Constellation</AstralModalTitle>
              <div className='flex w-full flex-row items-center space-x-[2rem]'>
                <div className='flex h-[800px] w-full flex-row items-center justify-center overflow-auto'>
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
          </AstralModalBodyWrapper>
        </AstralModal>
      </ContextForGenerateSceneController.Provider>
    </ContextForOpenable.Provider>
  );
}
