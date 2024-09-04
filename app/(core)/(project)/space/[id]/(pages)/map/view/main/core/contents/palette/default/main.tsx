import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralHideSourceIcon } from '@/icons/hide-source/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../../controller/map/main';

export function SpaceMapPaletteDefault() {
  const {
    state: { selectedIdeas },
    actions: { updateSelectedIdeas },
  } = useContext(ContextForSpaceMap);
  const ideaController = useContext(ContextForSceneIdeaList);

  return (
    <>
      <AstralDeleteIcon
        onClick={() => {
          selectedIdeas.forEach((idea) => {
            ideaController.actions.deleteActions.delete(idea.id);
          });
          updateSelectedIdeas([]);
        }}
      />
      <AstralHideSourceIcon
        onClick={() => {
          selectedIdeas.forEach((idea) => {
            ideaController.actions.editActions.edit(idea.id, {
              visible: true,
            });
          });
          updateSelectedIdeas([]);
        }}
      />
    </>
  );
}
