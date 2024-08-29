import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralFileIcon } from '@/icons/file/main';
import { AstralHideSourceIcon } from '@/icons/hide-source/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { AstralManufacturingIcon } from '@/icons/manufacturing/main';
import { AstralNoteIcon } from '@/icons/note/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../controller/map/main';
import { ContextForSpaceMapModals } from '../../../../../modal/controller/main';

export function SpaceMapCoreContentsPalette() {
  const mapController = useContext(ContextForSpaceMap);
  const ideaController = useContext(ContextForSceneIdeaList);
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <GlassWindowFrame
      className='w-full py-[2rem]'
      roundedFx={roundedFx['rounded-full']}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex flex-col items-center justify-center space-y-[1rem]'>
        {mapController.selectedIdea === null ? (
          <>
            <AstralAddIcon
              onClick={modalController.addFileIdeaController.open}
            />
            <AstralNoteIcon
              onClick={() => modalController.addTextIdeaController.open()}
            />
            <AstralFileIcon
              onClick={() => modalController.addFileIdeaController.open()}
            />
            <AstralLinkIcon
              onClick={() => modalController.addUrlIdeaController.open()}
            />
            <AstralManufacturingIcon onClick={() => alert('Coming soon...')} />
          </>
        ) : (
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
        )}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
