import { ResourceObj } from "@/tables/resource/main"

export function ResourceInfo({ resource }: { resource: ResourceObj}) {
    return <div className='flex flex-col'>
        <p className='text-xl font-bold text-slate-300'>{resource.title}</p>
        <p className='text-lg font-bold text-slate-400'>
            {resource?.file?.fileType}
        </p>
        <p className='text-lg font-bold text-slate-400'>
            {resource.description}
        </p>
    </div>
}