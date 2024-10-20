import { ContextForSpacesMap } from '@/(core)/(project)/spaces/[id]/(pages)/map/controller/main';
import { ContextForSpacesMapModals } from '@/(core)/(project)/spaces/[id]/(pages)/map/modal/controller/main';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { AstralCombineIcon } from '@/icons/combine/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralShareIcon } from '@/icons/share/main';
import { useContext } from 'react';

export function SpacesMapPaletteDefault() {
  const {
    state: { selectedIdeas },
    actions: { updateSelectedIdeas, linkIdeas },
  } = useContext(ContextForSpacesMap);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const modalController = useContext(ContextForSpacesMapModals);

  return (
    <>
      {selectedIdeas.length >= 2 && (
        <AstralCombineIcon
          onClick={() => {
            modalController.combineIdeasController.open();
          }}
        />
      )}
      {selectedIdeas.length >= 2 && (
        <AstralShareIcon
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
