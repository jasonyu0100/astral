import { Layer } from "@/(common)/layer/main";
import { borderStyles } from "@/(common)/styles/data";

export function FeedSidebarHeader() {
    return <Layer
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className='flex flex-row items-center'
      borderStyle={borderStyles['border-b']}
    >
      <p className='text-slate-400  text-xl font-extraBold'>Moments</p>
    </Layer>
}