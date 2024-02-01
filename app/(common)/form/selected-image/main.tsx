import { FileObj } from "@/tables/file/main";

export function SelectedImage({ selected }: { selected: FileObj}) {
    return <div className="w-full flex flex-col items-center py-[1rem]">
        <img
            className="w-[200px] h-[200px] flex-shrink-0 rounded-full bg-slate-300" 
            src={selected.src}
        />
    </div>
}