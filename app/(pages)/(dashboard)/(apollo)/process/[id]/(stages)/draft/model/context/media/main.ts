export interface DraftMediaObj {
  name?: string;
  description?: string;
  src: string;
}

export const exampleDraftMedia: DraftMediaObj = {
  src: "/apollo/draft/elements/1.png",
  name: "Sunset",
  description: "A brilliant sunset",
};