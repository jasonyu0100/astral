import { VisibleElementDoc } from "../interface";

export interface TextElementDoc extends VisibleElementDoc {
    text: string;
    style: string;
    typography: string;
    textColor: string;
    backgroundColor: string;
}