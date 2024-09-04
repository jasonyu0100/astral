import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralCombineIcon } from '@/icons/combine/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralHideSourceIcon } from '@/icons/hide-source/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../../controller/map/main';
import { ContextForSpaceMapModals } from '../../../../../../modal/controller/main';

export function SpaceMapPaletteDefault() {
  const {
    state: { selectedIdeas },
    actions: { updateSelectedIdeas },
  } = useContext(ContextForSpaceMap);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <>
      {selectedIdeas.length >= 3 && (
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
