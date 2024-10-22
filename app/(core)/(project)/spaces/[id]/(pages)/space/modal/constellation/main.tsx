import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { useContext } from 'react';
import {
  ContextForGenerateSceneController,
  GenerateSceneTab,
  useGenerateSceneController,
} from './controller/main';
import { SpacesSpaceSearchArticlesContent } from './pages/articles/main';
import { SpacesSpaceSearchImageryContent } from './pages/imagery/main';
import { SpacesSpaceSearchMediaContent } from './pages/media/main';
import { SpacesSpaceSearchTextContent } from './pages/text/main';
import { SpacesSpaceGenerateRowAdd } from './row/add/main';
import { SpacesSpaceConstellationTabs } from './tabs/main';

export function SpacesSpaceConstellationModal() {
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
                    GenerateSceneTab.TEXT && <SpacesSpaceSearchTextContent />}
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.ARTICLES && (
                    <SpacesSpaceSearchArticlesContent />
                  )}
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.IMAGERY && (
                    <SpacesSpaceSearchImageryContent />
                  )}
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.MEDIA && <SpacesSpaceSearchMediaContent />}
                </div>
                <SpacesSpaceGenerateRowAdd />
              </div>
              <SpacesSpaceConstellationTabs />
            </div>
          </CustomisableModalContents>
        </CustomisableModal>
      </ContextForGenerateSceneController.Provider>
    </ContextForOpenable.Provider>
  );
}
