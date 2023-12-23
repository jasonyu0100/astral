export default function StormSidePanelSection({children} : {children: React.ReactNode}) {
    return <div className="flex flex-col space-y-[2rem]">
        {children}
    </div>
}