import { ContextForSpacesMap } from '@/(core)/(project)/spaces/[id]/(pages)/map/controller/main';
import { ContextForSpacesMapModals } from '@/(core)/(project)/spaces/[id]/(pages)/map/modal/controller/main';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralCombineIcon } from '@/icons/combine/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralHideSourceIcon } from '@/icons/hide-source/main';
import { useContext } from 'react';

export function SpacesMapPaletteDefault() {
  const {
    state: { selectedIdeas },
    actions: { updateSelectedIdeas },
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
      <AstralHideSourceIcon
        onClick={() => {
          selectedIdeas.forEach((idea) => {
            ideaListController.actions.editActions.edit(idea.id, {
              visible: false,
            });
          });
          updateSelectedIdeas([]);
        }}
      />
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
