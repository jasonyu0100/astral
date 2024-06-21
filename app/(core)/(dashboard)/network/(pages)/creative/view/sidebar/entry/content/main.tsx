import { SpaceCover } from '@/(components)/(element)/space/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';

export function CreativeNetworkSidebarEntryContents() {
  return (
    <>
      <HorizontalDivider />

      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceCover fileElem={exampleFileElem} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceCover fileElem={exampleFileElem} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <SpaceCover fileElem={exampleFileElem} />
        <p className='text-lg font-bold text-slate-300'>Creative A</p>
      </div>
    </>
  );
}
