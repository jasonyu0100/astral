import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { useContext } from 'react';
import {
  ContextForGenerateSceneController,
  GenerateSceneTab,
  useGenerateSceneController,
} from './controller/main';
import { SpacesSpaceSearchArticlesContent } from './main/articles/main';
import { SpacesSpaceSearchImageryContent } from './main/imagery/main';
import { SpacesSpaceSearchMediaContent } from './main/media/main';
import { SpacesSpaceSearchTextContent } from './main/text/main';
import { SpacesSpaceGenerateRowAdd } from './row/add/main';
import { SpacesSpaceSearchArticlesTab } from './tabs/articles/main';
import { SpacesSpaceSearchImageryTab } from './tabs/imagery/main';
import { SpacesSpaceSearchMediaTab } from './tabs/media/main';
import { SpacesSpaceSearchTextTab } from './tabs/text/main';
import { SpacesSpaceSearchVaultTab } from './tabs/vault/main';

export function SpacesSpaceSetConstellationModal() {
  const openableController = useContext(ContextForOpenable);
  const generateSceneController = useGenerateSceneController();

  return (
    <ContextForOpenable.Provider value={openableController}>
      <ContextForGenerateSceneController.Provider
        value={generateSceneController}
      >
        <CustomisableModal>
          <CustomisableModalContents className='h-full'>
            <div className='flex h-full w-full flex-col justify-center'>
              <div className='flex flex-row items-center space-x-[2rem]'>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
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
                  {generateSceneController.state.tab ===
                    GenerateSceneTab.VAULT && <SpacesSpaceSearchTextContent />}
                </div>
                <SpacesSpaceGenerateRowAdd />
              </div>
              <div className='flex flex-row p-[2rem]'>
                <div className='grid w-full grid-cols-5'>
                  <SpacesSpaceSearchTextTab />
                  <SpacesSpaceSearchArticlesTab />
                  <SpacesSpaceSearchImageryTab />
                  <SpacesSpaceSearchMediaTab />
                  <SpacesSpaceSearchVaultTab />
                </div>
              </div>
            </div>
          </CustomisableModalContents>
        </CustomisableModal>
      </ContextForGenerateSceneController.Provider>
    </ContextForOpenable.Provider>
  );
}
