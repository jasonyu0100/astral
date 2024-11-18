import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { SpaceTemplate, SpaceTemplateMap } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForHomeProjectsModals } from '../../modal/controller/main';
import { ContextForHomeProjectsCreateSpace } from '../../modal/create-space/controller/main';

export function HomeProjectsViewTemplates() {
  const homePersonalModalsController = useContext(ContextForHomeProjectsModals);
  const createSpaceController = useContext(ContextForHomeProjectsCreateSpace);

  return (
    <GlassWindowFrame>
      <GlassWindowContents className='flex flex-col space-y-[2rem]'>
        <div className='flex w-full flex-row space-x-[2rem] overflow-auto pb-[2rem]'>
          {Object.entries(SpaceTemplateMap).map(([template, obj]) => (
            <GlassWindowFrame
              className='aspect-[3/2] h-[200px] flex-shrink-0 p-[1rem]'
              roundedFx={roundedFx.rounded}
              borderFx={borderFx['border-around']}
            >
              <GlassWindowContents
                className='flex cursor-pointer flex-col space-y-[1rem]'
                onClick={() => {
                  createSpaceController.actions.updateCategory(
                    template as SpaceTemplate,
                  );
                  homePersonalModalsController.createSpaceController.open();
                }}
              >
                <div className='flex flex-row items-center space-x-[1rem]'>
                  <div className='flex h-[2.5rem] w-[2.5rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                    <AstralAddIcon />
                  </div>
                  <p className='text-xl font-bold text-slate-300'>
                    {obj?.title}
                  </p>
                </div>
                <p className='text-sm font-light text-slate-300'>
                  {obj?.description}
                </p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          ))}
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
