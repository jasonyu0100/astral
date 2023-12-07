export default function StoryContainer({children} : {children: React.ReactNode}) {
    return <div className="flex flex-shrink-0 bg-slate-500 rounded-md w-[500px] h-[700px]">
        {children}
    </div>
}