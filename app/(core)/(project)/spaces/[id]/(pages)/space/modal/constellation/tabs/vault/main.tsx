import { useContext } from 'react';
import { GenerateTab } from '../../common/tabs/tab/main';
import { GenerateTabOrangeShard } from '../../common/tabs/tab/shard/orange/main';
import { GenerateTabText } from '../../common/tabs/tab/text/main';
import {
  ContextForGenerateSceneController,
  GenerateSceneTab,
} from '../../controller/main';

export function SpacesSpaceSearchVaultTab() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const active = generateSceneController.state.tab === GenerateSceneTab.VAULT;

  return (
    <div
      className='cursor-pointer'
      onClick={() =>
        generateSceneController.actions.updateTab(GenerateSceneTab.VAULT)
      }
    >
      <GenerateTab>
        <GenerateTabText active={active}>
          {GenerateSceneTab.VAULT}
        </GenerateTabText>
        <GenerateTabOrangeShard active={active} />
      </GenerateTab>
    </div>
  );
}
