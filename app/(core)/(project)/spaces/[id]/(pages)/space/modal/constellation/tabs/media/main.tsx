import { useContext } from 'react';
import { GenerateTab } from '../../common/tabs/tab/main';
import { GenerateTabPurpleShard } from '../../common/tabs/tab/shard/purple/main';
import { GenerateTabText } from '../../common/tabs/tab/text/main';
import {
  ContextForGenerateSceneController,
  GenerateSceneTab,
} from '../../controller/main';

export function SpacesSpaceSearchMediaTab() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const active = generateSceneController.state.tab === GenerateSceneTab.MEDIA;

  return (
    <div
      className='cursor-pointer'
      onClick={() =>
        generateSceneController.actions.updateTab(GenerateSceneTab.MEDIA)
      }
    >
      <GenerateTab>
        <GenerateTabText active={active}>
          {GenerateSceneTab.MEDIA}
        </GenerateTabText>
        <GenerateTabPurpleShard active={active} />
      </GenerateTab>
    </div>
  );
}
