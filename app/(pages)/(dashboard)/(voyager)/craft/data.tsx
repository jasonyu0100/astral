export interface CraftDrive {
    sections: CraftSection[];
    cart: CraftFile[];

}

export interface CraftSearch {
    query: string;
    results: CraftFile[];
}

export interface CraftSection {
    name: string;
    description: string;
    folders: CraftFolder[];
}

export interface CraftFolder {
    name: string;
    files: CraftFile[];

}

export interface CraftFile {
    name: string;
    description: string;
    src: string;
}