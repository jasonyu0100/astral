import { ResourceContext } from "@/(ouros)/(model)/resource/main";
import { useContext } from "react";

export function CollectionResourceImage() {
  const resource = useContext(ResourceContext);

  return (
    <div className='flex flex-col h-full w-full'>
      <img
        src={resource?.file?.src}
        className='aspect-square w-full cursor-pointer bg-black'
      />
      <p className='w-full font-extraBold text-xl mt-[0.5rem]'>{resource.file?.title}</p>
    </div>
  );
}
