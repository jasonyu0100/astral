import { ContextForSpacesScene } from '@/(core)/(project)/spaces/[id]/(pages)/scene/controller/main';
import { ContextForSpacesSceneModals } from '@/(core)/(project)/spaces/[id]/(pages)/scene/modal/controller/main';
import { AstralCombineIcon } from '@/icons/combine/main';
import { AstralContentCopyIcon } from '@/icons/content-copy/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralShareIcon } from '@/icons/share/main';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { useContext } from 'react';

export function SpacesScenePaletteSelected() {
  const spacesSceneController = useContext(ContextForSpacesScene);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const modalController = useContext(ContextForSpacesSceneModals);

  return (
    <>
      <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
        <AstralDeleteIcon
          className='h-[2rem] w-[2rem]'
          onClick={() => {
            spacesSceneController.state.selectedIdeas.forEach((idea) => {
              ideaListController.actions.deleteActions.delete(idea.id);
            });
            spacesSceneController.actions.updateSelectedIdeas([]);
          }}
        />
      </div>
      <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
        <AstralContentCopyIcon
          className='h-[2rem] w-[2rem]'
          onClick={() => {
            alert('Coming soon...');
          }}
        />
      </div>
      {spacesSceneController.state.selectedIdeas.length >= 2 && (
        <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
          <AstralCombineIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => {
              modalController.combineIdeasController.open();
            }}
          />
        </div>
      )}
      {spacesSceneController.state.selectedIdeas.length >= 2 && (
        <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
          <AstralShareIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => {
              spacesSceneController.actions.linkIdeas();
            }}
          />
        </div>
      )}
      {/* <AstralHideSourceIcon
        onClick={() => {
          selectedIdeas.forEach((idea) => {
            ideaListController.actions.editActions.edit(idea.id, {
              visible: false,
            });
          });
          updateSelectedIdeas([]);
        }}
      /> */}
    </>
  );
}
