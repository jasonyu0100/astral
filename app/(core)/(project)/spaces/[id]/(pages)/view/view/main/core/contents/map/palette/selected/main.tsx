import { ContextForSpacesView } from '@/(core)/(project)/spaces/[id]/(pages)/view/controller/main';
import { ContextForSpacesViewModals } from '@/(core)/(project)/spaces/[id]/(pages)/view/modal/controller/main';
import { AstralCombineIcon } from '@/icons/combine/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralShareIcon } from '@/icons/share/main';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { useContext } from 'react';

export function SpacesViewPaletteSelected() {
  const {
    state: { selectedIdeas },
    actions: { updateSelectedIdeas, linkIdeas },
  } = useContext(ContextForSpacesView);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const modalController = useContext(ContextForSpacesViewModals);

  return (
    <>
      {selectedIdeas.length >= 2 && (
        <AstralCombineIcon
          className='h-[2rem] w-[2rem]'
          onClick={() => {
            modalController.combineIdeasController.open();
          }}
        />
      )}
      {selectedIdeas.length >= 2 && (
        <AstralShareIcon
          className='h-[2rem] w-[2rem]'
          onClick={() => {
            linkIdeas();
          }}
        />
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
      <AstralDeleteIcon
        className='h-[2rem] w-[2rem]'
        onClick={() => {
          selectedIdeas.forEach((idea) => {
            ideaListController.actions.deleteActions.delete(idea.id);
          });
          updateSelectedIdeas([]);
        }}
      />
    </>
  );
}
