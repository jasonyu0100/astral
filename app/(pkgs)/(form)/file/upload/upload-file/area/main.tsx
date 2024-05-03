import { UploadFileAreaPlaceholder } from "./placeholder/main";
import { UploadFileAreaInterface } from "./upload/main";

export function UploadFileArea() {
  return (
    <div className='relative mb-3 h-[100px] border-b border-black p-4'>
      <UploadFileAreaInterface />
      <UploadFileAreaPlaceholder />
    </div>
  );
}
