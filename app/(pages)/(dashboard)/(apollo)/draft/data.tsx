// APOLLO

export interface ApolloDraft {
  elements: DraftElement[];
}

export interface DraftElement {
  src: string;
}

export const defaultDraftElement: DraftElement = {
  src: "/voyager/craft/elements/1.png",
};

export const defaultDraftElements: DraftElement[] = [
  { src: "/voyager/craft/elements/1.png" },
  { src: "/voyager/craft/elements/2.png" },
  { src: "/voyager/craft/elements/3.png" },
  { src: "/voyager/craft/elements/4.png" },
  { src: "/voyager/craft/elements/5.png" },
  { src: "/voyager/craft/elements/6.png" },
];

export const defaultApolloDraft: ApolloDraft = {
  elements: defaultDraftElements,
};

// CONSTELLATION

export interface ConstellationDraft {
  stars: DraftStar[];
}

export interface DraftStar {
  x: number;
  y: number;
  element: DraftElement;
}

export const defaultDraftStar: DraftStar = {
  x: 120,
  y: 120,
  element: defaultDraftElement,
};

export const defaultDraftStars: DraftStar[] = [
  { x: 120, y: 120, element: defaultDraftElement },
  { x: 480, y: 120, element: defaultDraftElement },
  { x: 240, y: 360, element: defaultDraftElement },
];

export const defaultConstellationDraft: ConstellationDraft = {
  stars: defaultDraftStars,
};
