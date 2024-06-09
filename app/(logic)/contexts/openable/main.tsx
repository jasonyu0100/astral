import { createContext } from "react";

export interface ContextForOpenableInterface {
    opened: boolean;
    open: () => void;
    close: () => void;
}

export const ContextForOpenable = createContext({
    opened: false,
    open: () => {},
    close: () => {},
});