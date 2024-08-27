import { ContextForSessionForm } from '@/(core)/(project)/space/[id]/(pages)/progress/(controller)/complete-session-form/main';
import { glassFx } from '@/style/data';
import { GlassAreaPane } from '@/ui/glass/area/pane/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function SpaceSessionCompleteSessionFormDetails() {
  const sessionFormController = useContext(ContextForSessionForm);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='text-xs font-bold text-slate-300'>Title</p>
      <GlassWindowFrame className='h-[2rem] w-full'>
        <GlassWindowContents>
          <input
            className='h-full w-full bg-transparent p-[1rem] font-bold text-slate-500 outline-none'
            value={sessionFormController.title}
            onChange={(e) => sessionFormController.setTitle(e.target.value)}
          />
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <p className='text-xs font-bold text-slate-300'>Description</p>
      <GlassWindowFrame className='w-full'>
        <GlassWindowContents>
          <textarea
            className='h-full w-full resize-none bg-transparent p-[1rem] font-bold text-slate-500 outline-none'
            value={sessionFormController.description}
            onChange={(e) =>
              sessionFormController.setDescription(e.target.value)
            }
          />
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
