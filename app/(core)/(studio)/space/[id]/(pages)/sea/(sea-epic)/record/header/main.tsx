import { ProfileCover } from "@/(components)/(element)/profile/main";
import { exampleFile } from "@/(types)/model/resource/file/main";

export function SeaContributionHeader() {
  return (
    <div className='flex flex-row items-center space-x-[1rem] p-[1rem]'>
      <ProfileCover file={exampleFile} />
      <div className='flex flex-col'>
        <p className='font-bold text-slate-300'>John Smith</p>
        <p className='text-slate-500'>Space XYZ</p>
      </div>
    </div>
  );
}
