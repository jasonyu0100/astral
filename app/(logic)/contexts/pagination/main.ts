import { createContext } from "react";

export interface ContextForPagableInterface {
    page: number;
    updatePage: (page: number) => void;
}

export const ContextForPagable = createContext({
    page: 0,
    updatePage: (page: number) => {},
});