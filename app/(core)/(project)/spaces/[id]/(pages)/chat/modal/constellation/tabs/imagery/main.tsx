import { useContext } from 'react';
import { GenerateTab } from '../../common/tabs/tab/main';
import { GenerateTabGreenShard } from '../../common/tabs/tab/shard/green/main';
import { GenerateTabText } from '../../common/tabs/tab/text/main';
import {
  ContextForGenerateSceneController,
  GenerateSceneTab,
} from '../../controller/main';

export function SpacesChatSearchImageryTab() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const active = generateSceneController.state.tab === GenerateSceneTab.IMAGERY;

  return (
    <div
      className='cursor-pointer'
      onClick={() =>
        generateSceneController.actions.updateTab(GenerateSceneTab.IMAGERY)
      }
    >
      <GenerateTab>
        <GenerateTabText active={active}>
          {GenerateSceneTab.IMAGERY}
        </GenerateTabText>
        <GenerateTabGreenShard active={active} />
      </GenerateTab>
    </div>
  );
}
