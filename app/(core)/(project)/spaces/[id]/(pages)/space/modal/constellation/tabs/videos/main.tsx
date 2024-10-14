import React, { useContext } from 'react';
import { GenerateTab } from '../../common/tabs/tab/main';
import { GenerateTabBlueShard } from '../../common/tabs/tab/shard/blue/main';
import { GenerateTabText } from '../../common/tabs/tab/text/main';
import {
  ContextForGenerateSceneController,
  GenerateSceneTab,
} from '../../controller/main';

export function SpacesSpaceSearchArticles() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const active = generateSceneController.state.tab === GenerateSceneTab.TEXT;

  return (
    <div
      className='cursor-pointer'
      onClick={() =>
        generateSceneController.actions.updateTab(GenerateSceneTab.TEXT)
      }
    >
      <GenerateTab>
        <GenerateTabText active={active}>
          {GenerateSceneTab.TEXT}
        </GenerateTabText>
        <GenerateTabBlueShard active={active} />
      </GenerateTab>
    </div>
  );
}
