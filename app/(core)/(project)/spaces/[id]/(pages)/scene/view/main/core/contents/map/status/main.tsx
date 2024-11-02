import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';

export function SpacesSceneStatus() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='absolute top-[0rem] flex w-full flex-shrink-0 flex-col items-center justify-center px-[1rem]'>
      <GlassWindowFrame className='h-full w-full items-center justify-center'>
        <GlassWindowContents className='flex h-full w-full flex-row items-center'>
          <div className='flex h-full w-full flex-col space-y-[1rem] py-[1rem]'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-blue-500'>
                <p className='text-lg font-bold text-slate-300'>
                  {ideaListController.state.objs.length}
                </p>
              </div>
              <p className='text-lg font-bold text-slate-300'>ideas</p>
            </div>
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
