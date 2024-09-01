import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { AstralHideSourceIcon } from '@/icons/hide-source/main';
import { AstralSourceIcon } from '@/icons/source/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpaceMapSidebarIdeasListItem() {
  const idea = useContext(ContextForSceneIdeaObj);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <GlassWindowFrame className='p-[1rem]' roundedFx={roundedFx.rounded}>
      <GlassWindowContents className='flex w-full flex-row items-center justify-between'>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <div key={idea.id} className='flex flex-col font-bold text-slate-300'>
            <div className='text-lg font-bold'>
              {idea.variant} - {idea.title}
            </div>
            <div className='text-sm font-light'>
              {idea.description || 'No description'}
            </div>
          </div>
        </div>
        {idea.visible ? (
          <AstralSourceIcon
            onClick={() => {
              ideaListController.actions.editActions.edit(idea.id, {
                visible: false,
              });
            }}
          />
        ) : (
          <AstralHideSourceIcon
            onClick={() => {
              ideaListController.actions.editActions.edit(idea.id, {
                visible: true,
              });
            }}
          />
        )}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
