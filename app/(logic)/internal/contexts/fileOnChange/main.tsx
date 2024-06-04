import { createContext } from "react";
import { FileObj } from "../../../../(model)/media/resource/file/main";

interface FileOnChangeContextInterface {
    file: FileObj;
    onChange: (file: FileObj) => void;
}

export const FileOnChangeContext = createContext({} as FileOnChangeContextInterface);