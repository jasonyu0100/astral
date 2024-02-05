import { FileObj } from "@/tables/file/main";

export function UploadedFileInfo({ file }: {file: FileObj}) {
  return (
    <div className='flex flex-row space-x-[2rem] items-center'>
      <img
        src={file.src}
        alt={file.name}
        className='bg-black h-[100px] aspect-square shadow-md object-contain'
      />
      <div className='flex flex-col'>
        <p className='text-lg font-bold'>{file.name}</p>
        <p className='text-sm text-slate-500'>{file.fileType}</p>
        <p className='text-md text-slate-500'>{file.size} bytes</p>
      </div>
    </div>
  );
}
