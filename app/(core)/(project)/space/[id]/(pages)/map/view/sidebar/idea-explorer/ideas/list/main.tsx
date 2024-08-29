import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { AstralHideSourceIcon } from '@/icons/hide-source/main';
import { AstralSourceIcon } from '@/icons/source/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpaceMapSidebarIdeasList() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <>
      {ideaListController.state.more.queryResults.map((idea, index) => (
        <GlassWindowFrame
          className='p-[1rem]'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex w-full flex-row items-center justify-between'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <div className='flex h-[1.5rem] w-[1.5rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                <p className='text-center font-bold text-white'>{index + 1}</p>
              </div>
              <div
                key={idea.id}
                className='flex flex-col font-bold text-slate-300'
              >
                <div className='text-lg font-bold'>
                  {idea.title || 'Untitled'}
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
      ))}
    </>
  );
}
