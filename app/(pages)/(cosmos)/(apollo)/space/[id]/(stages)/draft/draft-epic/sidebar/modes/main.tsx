export function SidebarBody({children} : {children: React.ReactNode}) {
    return <div className="flex flex-col overflow-auto pr-[1rem]">{children}</div>
}