import { ResourceContext } from "@/(types)/model/resource/main";
import { useContext } from "react";

export function CollectionResourceImage() {
  const resource = useContext(ResourceContext);

  return (
    <div className='flex flex-col h-full w-full flex-shrink-0'>
      <img
        src={resource?.file?.src}
        className='aspect-square w-full cursor-pointer bg-black flex-shrink-0'
      />
      <p className='w-full font-extraBold text-xl mt-[1rem] text-center'>{resource.title}</p>
    </div>
  );
}
