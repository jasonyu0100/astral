import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { AstralHideSourceIcon } from '@/icons/hide-source/main';
import { AstralSourceIcon } from '@/icons/source/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';

export function SpaceMapSidebarIdeasListItem() {
  const idea = useContext(ContextForSceneIdeaObj);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <GlassWindowFrame className='aspect-square w-full p-[1rem]'>
      <GlassWindowContents className='flex h-full w-full flex-col space-y-[0.5rem] overflow-auto'>
        <div className='flex w-full flex-row items-center justify-between'>
          <div className='font-extraBold text-xl text-slate-300'>
            {idea.title || 'Untitled'}
          </div>
          <div className='w-[1.5rem] flex-shrink-0'>
            {idea.visible ? (
              <AstralHideSourceIcon
                className='h-[1rem] w-[1rem] fill-slate-500'
                onClick={() => {
                  ideaListController.actions.editActions.edit(idea.id, {
                    visible: false,
                  });
                }}
              />
            ) : (
              <AstralSourceIcon
                className='h-[1rem] w-[1rem] fill-slate-500'
                onClick={() => {
                  ideaListController.actions.editActions.edit(idea.id, {
                    visible: true,
                  });
                }}
              />
            )}
          </div>
        </div>
        <HorizontalDivider />
        <div className='h-full w-full space-y-[0.5rem] overflow-auto'>
          <p className='text-sm font-light text-slate-300'>
            {idea.description || 'No description'}
          </p>
          <>
            {idea.variant === ElementVariant.URL && (
              <>
                <p className='w-full text-sm font-light text-slate-300'>
                  {idea.urlElem?.url}
                </p>
              </>
            )}
            {idea.variant === ElementVariant.TEXT && (
              <>
                <p className='w-full text-sm font-light text-slate-300'>
                  {idea.textElem?.text}
                </p>
              </>
            )}
            {idea.variant === ElementVariant.FILE && (
              <>
                <p className='w-full text-sm font-light text-slate-300'>
                  {idea.fileElem?.src}
                </p>
                <p className='w-full text-sm font-light text-slate-300'>
                  {idea.fileElem?.variant}
                </p>
              </>
            )}
          </>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
