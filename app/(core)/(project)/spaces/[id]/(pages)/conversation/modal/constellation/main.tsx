import { CustomisableModalContents } from '@/components/modal/general/container/main';
import { CustomisableModal } from '@/components/modal/general/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import {
  ContextForGenerateSceneController,
  GenerateSceneTab,
  useGenerateSceneController,
} from './controller/main';
import { SpacesConversationSearchArticlesContent } from './pages/articles/main';
import { SpacesConversationSearchImageryContent } from './pages/imagery/main';
import { SpacesConversationSearchMediaContent } from './pages/media/main';
import { SpacesConversationSearchTextContent } from './pages/text/main';
import { SpacesConversationGenerateRowAdd } from './row/add/main';
import { SpacesConversationConstellationTabs } from './tabs/main';

export function SpacesConversationConstellationModal() {
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
                    GenerateSceneTab.TEXT && (
                    <SpacesConversationSearchTextContent />
                  )}
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.ARTICLES && (
                    <SpacesConversationSearchArticlesContent />
                  )}
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.IMAGERY && (
                    <SpacesConversationSearchImageryContent />
                  )}
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.MEDIA && (
                    <SpacesConversationSearchMediaContent />
                  )}
                </div>
                <SpacesConversationGenerateRowAdd />
              </div>
              <SpacesConversationConstellationTabs />
            </div>
          </CustomisableModalContents>
        </CustomisableModal>
      </ContextForGenerateSceneController.Provider>
    </ContextForOpenable.Provider>
  );
}
