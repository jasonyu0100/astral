import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralHideSourceIcon } from '@/icons/hide-source/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../../controller/map/main';

export function SpaceMapPaletteDefault() {
  const mapController = useContext(ContextForSpaceMap);
  const ideaController = useContext(ContextForSceneIdeaList);

  return (
    <>
      <AstralDeleteIcon
        onClick={() => {
          if (mapController.selectedIdea !== null) {
            ideaController.actions.deleteActions.delete(
              mapController.selectedIdea.id,
            );
            mapController.updateSelectedIdea(null);
          }
        }}
      />
      <AstralHideSourceIcon
        onClick={() => {
          ideaController.actions.editActions.edit(
            ideaController.state.currentObj?.id || '',
            { visible: true },
          );
          mapController.updateSelectedIdea(null);
        }}
      />
    </>
  );
}
