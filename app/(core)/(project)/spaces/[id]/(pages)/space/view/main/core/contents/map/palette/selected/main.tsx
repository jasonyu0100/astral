import { ContextForSpacesSpace } from '@/(core)/(project)/spaces/[id]/(pages)/space/controller/main';
import { ContextForSpacesSpaceModals } from '@/(core)/(project)/spaces/[id]/(pages)/space/modal/controller/main';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { AstralCombineIcon } from '@/icons/combine/main';
import { AstralContentCopyIcon } from '@/icons/content-copy/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralForwardIcon } from '@/icons/forward/main';
import { AstralPolylineIcon } from '@/icons/polyline/main';
import { useContext } from 'react';

export function SpacesSpacePaletteSelected() {
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const spacesSpaceModalController = useContext(ContextForSpacesSpaceModals);

  return (
    <>
      <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
        <AstralDeleteIcon
          className='h-[2rem] w-[2rem]'
          onClick={() => {
            spacesSpaceController.state.selectedIdeas.forEach((idea) => {
              ideaListController.actions.deleteActions.delete(idea.id);
            });
            spacesSpaceController.actions.updateSelectedIdeas([]);
          }}
        />
      </div>
      <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
        <AstralContentCopyIcon
          className='h-[2rem] w-[2rem]'
          onClick={() => {
            spacesSpaceController.actions.copyIdeas();
          }}
        />
      </div>
      <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
        <AstralForwardIcon
          className='h-[2rem] w-[2rem]'
          onClick={() => {
            spacesSpaceModalController.migrateSceneController.open();
          }}
        />
      </div>
      {spacesSpaceController.state.selectedIdeas.length >= 2 && (
        <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
          <AstralCombineIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => {
              spacesSpaceModalController.combineIdeasController.open();
            }}
          />
        </div>
      )}
      {spacesSpaceController.state.selectedIdeas.length >= 2 && (
        <div className='flex items-center justify-center rounded-full bg-slate-500 p-[0.5rem]'>
          <AstralPolylineIcon
            className='h-[2rem] w-[2rem]'
            onClick={() => {
              spacesSpaceController.actions.linkIdeas();
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
