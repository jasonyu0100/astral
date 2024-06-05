import { createContext } from "react";
import { FileElem } from "../../../../(model)/elements/file/main";

interface FileOnChangeContextInterface {
    file: FileElem;
    onChange: (file: FileElem) => void;
}

export const FileOnChangeContext = createContext({} as FileOnChangeContextInterface);