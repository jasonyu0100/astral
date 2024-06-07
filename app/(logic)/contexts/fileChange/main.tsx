import { createContext } from "react";
import { FileElem } from "../../../(model)/elements/file/main";

interface ContextForFileChangable {
    fileElem: FileElem;
    onChange: (fileElem: FileElem) => void;
}

export const ContextForFileChangable = createContext({} as ContextForFileChangable);