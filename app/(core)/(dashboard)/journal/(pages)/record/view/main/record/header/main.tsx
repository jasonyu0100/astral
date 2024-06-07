import { ProfileCover } from "@/(components)/(element)/profile/main";
import { exampleFileElem } from "@/(model)/elements/file/main";

export function JournalRecordHeader() {
  return (
    <div className='flex flex-row items-center space-x-[1rem] p-[1rem]'>
      <ProfileCover fileElem={exampleFileElem} />
      <div className='flex flex-col'>
        <p className='font-bold text-slate-300'>John Smith</p>
        <p className='text-slate-500'>Space XYZ</p>
      </div>
    </div>
  );
}
