import { ReactElement } from "react";

export interface SidebarLink {
    name: string;
    path: string;
    icon?: ReactElement;
}

export function createSidebarLink(name: string, path: string, icon?: ReactElement): SidebarLink {
    return {
        name,
        path,
        icon
    }
}