import { ResourceContext } from "@/(logic)/model/resource/main";
import { useFileModal } from "@/(modals)/resource-modal/main";
import { useContext } from "react";

export function CollectionResourceInfo() {
  const resource = useContext(ResourceContext);
  const modalContext = useFileModal();
  
  return (
    <div className='flex h-full w-full flex-col'>
      <p className='font-extraBold text-2xl text-slate-500'>{resource.title}</p>
      <p className='text-lg font-bold text-slate-400'>
        {resource?.file?.fileType}
      </p>
      <p className='text-md mt-[1rem] font-light text-slate-400'>
        {resource.description}
      </p>
      <button
        className='mt-auto w-full bg-black p-[1rem] font-bold text-white'
        onClick={() => modalContext.editResourceModal.open()}
      >
        Change
      </button>
    </div>
  );
}
