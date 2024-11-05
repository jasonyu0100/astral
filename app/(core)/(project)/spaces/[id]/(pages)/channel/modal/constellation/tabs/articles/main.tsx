import { useContext } from 'react';
import { GenerateTab } from '../../common/tabs/tab/main';
import { GenerateTabGreenShard } from '../../common/tabs/tab/shard/green/main';
import { GenerateTabText } from '../../common/tabs/tab/text/main';
import {
  ContextForGenerateSceneController,
  GenerateSceneTab,
} from '../../controller/main';

export function SpacesChannelSearchArticlesTab() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const active =
    generateSceneController.state.tab === GenerateSceneTab.ARTICLES;

  return (
    <div
      className='cursor-pointer'
      onClick={() =>
        generateSceneController.actions.updateTab(GenerateSceneTab.ARTICLES)
      }
    >
      <GenerateTab>
        <GenerateTabText active={active}>
          {GenerateSceneTab.ARTICLES}
        </GenerateTabText>
        <GenerateTabGreenShard active={active} />
      </GenerateTab>
    </div>
  );
}
