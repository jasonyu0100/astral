import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { SpaceThumbnailElement } from '@/ui/element/space/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';

export function CreativeNetworkSidebarEntryContents() {
  return (
    <>
      <HorizontalDivider />

      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceThumbnailElement fileElem={exampleFileElem} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceThumbnailElement fileElem={exampleFileElem} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceThumbnailElement fileElem={exampleFileElem} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
    </>
  );
}
