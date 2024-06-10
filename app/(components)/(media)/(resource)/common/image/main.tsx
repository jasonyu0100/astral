import { ContextForCollectionResourceObj } from "@/(server)/(model)/gallery/collection/resource/main";
import { useContext } from "react";

export function CollectionResourceImage() {
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <div className='flex flex-col h-full w-full flex-shrink-0'>
      <img
        src={resource?.fileElem?.src}
        className='aspect-square w-full cursor-pointer bg-black flex-shrink-0 border-black border-[1px] rounded'
      />
      <p className='w-full font-extraBold mt-[0.5rem] text-center'>{resource.title}</p>
    </div>
  );
}
