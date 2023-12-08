export default function FlowProgressColumn({ children } : { children: React.ReactNode}) {
    return <div className="flex flex-col overflow-auto flex-shrink-0 space-y-[20px] p-[20px] items-center bg-slate-800 w-[200px] h-full">
        {children}
    </div>
}