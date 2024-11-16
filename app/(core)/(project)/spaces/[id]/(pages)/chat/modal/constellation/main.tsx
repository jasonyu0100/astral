import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowBackIcon } from '@/icons/arrow-back/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import {
  ContextForGenerateSceneController,
  GenerateScenePage,
  GenerateSceneTab,
  useGenerateSceneController,
} from './controller/main';
import { SpacesChatSearchImageryContent } from './pages/imagery/main';
import { SpacesChatSearchMediaContent } from './pages/media/main';
import { SpacesChatGenerateTextContent } from './pages/text/main';
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
          {generateSceneController.state.page ===
            GenerateScenePage.PAGE_ONE && (
            <>
              <AstralModalBodyWrapper>
                <AstralModalBody>
                  <AstralModalBodyContents>
                    <AstralModalTitle>Generate Scene</AstralModalTitle>
                    <AstralTextLineInput
                      title='Title'
                      placeholder='Enter title'
                      value={generateSceneController.state.title}
                      onChange={(e) =>
                        generateSceneController.actions.updateTitle(
                          e.target.value,
                        )
                      }
                    />
                    <AstralTextAreaInput
                      title='Objective'
                      placeholder='Enter objective'
                      rows={5}
                      value={generateSceneController.state.objective}
                      onChange={(e) =>
                        generateSceneController.actions.updateObjective(
                          e.target.value,
                        )
                      }
                      style={{ resize: 'none' }}
                    />
                  </AstralModalBodyContents>
                  <AstralModalBodyAction>
                    <AstralRoundedActionButton
                      className='h-[5rem] w-[5rem]'
                      onClick={() => {
                        generateSceneController.actions.updatePage(
                          GenerateScenePage.PAGE_TWO,
                        );
                      }}
                    >
                      <AstralArrowForwardIcon />
                    </AstralRoundedActionButton>
                  </AstralModalBodyAction>
                </AstralModalBody>
              </AstralModalBodyWrapper>
            </>
          )}
          {generateSceneController.state.page ===
            GenerateScenePage.PAGE_TWO && (
            <>
              <AstralModalBodyWrapper className='w-full'>
                <AstralModalBody className='h-full w-full'>
                  <AstralModalBodyContents>
                    <AstralModalTitle>Generate Scene</AstralModalTitle>
                    <SpacesChatConstellationTabs />
                    <div className='flex w-full flex-row items-center justify-center'>
                      {generateSceneController.state.tab ===
                        GenerateSceneTab.TEXT && (
                        <SpacesChatGenerateTextContent />
                      )}
                      {generateSceneController.state.tab ===
                        GenerateSceneTab.IMAGERY && (
                        <SpacesChatSearchImageryContent />
                      )}
                      {generateSceneController.state.tab ===
                        GenerateSceneTab.MEDIA && (
                        <SpacesChatSearchMediaContent />
                      )}
                    </div>
                  </AstralModalBodyContents>
                  <AstralModalBodyAction>
                    <AstralRoundedActionButton
                      className='from-slate-500 to-slate-600'
                      onClick={() => {
                        generateSceneController.actions.updatePage(
                          GenerateScenePage.PAGE_ONE,
                        );
                      }}
                    >
                      <AstralArrowBackIcon />
                    </AstralRoundedActionButton>
                    <AstralRoundedActionButton
                      onClick={() => {
                        generateSceneController.actions.createMap();
                      }}
                    >
                      <AstralCheckIcon />
                    </AstralRoundedActionButton>
                  </AstralModalBodyAction>
                </AstralModalBody>
              </AstralModalBodyWrapper>
            </>
          )}
        </AstralModal>
      </ContextForGenerateSceneController.Provider>
    </ContextForOpenable.Provider>
  );
}
