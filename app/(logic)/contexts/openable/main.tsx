import { createContext, useState } from "react";

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

export const useControllerForOpenable = () => {
    const [opened, setOpened] = useState(false);

    return {
        opened,
        open: () => setOpened(true),
        close: () => setOpened(false),
    };
}