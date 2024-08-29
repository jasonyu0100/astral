import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { useContext } from 'react';

export function SpaceMapIdeaInformation() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='absolute top-0 flex h-full w-full justify-center'>
      <div className='flex aspect-[12/9] w-full flex-col space-y-[5px] bg-yellow-500 p-[10px]'>
        <p className='w-full text-[10px] font-bold text-black'>
          {ideaListController.state.currentObj?.title || 'Untitled'}
        </p>
        <p className='w-full text-[10px] font-bold text-black'>
          {ideaListController.state.currentObj?.description || 'No description'}
        </p>
        <p className=' w-full text-[10px] font-light text-black'>
          {ideaListController.state.currentObj?.width},
          {ideaListController.state.currentObj?.height},
          {ideaListController.state.currentObj?.x},
          {ideaListController.state.currentObj?.y}
        </p>
      </div>
    </div>
  );
}
