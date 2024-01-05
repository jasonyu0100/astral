import React from "react"

export function FolderHeaderTools({ children} : { children: React.ReactNode}) {
    return <div className="flex flex-row flex-shrink-0 space-x-[1rem]">
        {children}
    </div>
}