import { createContext, useState } from "react";

export interface ContextForPagableInterface {
    page: number;
    updatePage: (page: number) => void;
}

export const ContextForPagable = createContext({
    page: 0,
    updatePage: (page: number) => {},
});

export const useControllerForPagable = () => {
    const [page, setPage] = useState(0);

    return {
        page: page,
        updatePage: (page: number) => setPage(page),
    };
}