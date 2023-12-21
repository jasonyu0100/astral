// APOLLO

export interface ApolloDraft {
  elements: DraftElement[];
}

export interface DraftElement {
  name?: string;
  description?: string;
  src: string;
}

export const defaultDraftElement: DraftElement = {
  src: "/apollo/draft/elements/1.png", name: "Sunset", description: "A brilliant sunset"
};

export const defaultDraftElements: DraftElement[] = [
  { src: "/apollo/draft/elements/1.png", name: "Sunset", description: "A brilliant sunset" },
  { src: "/apollo/draft/elements/2.png", name: "Valley", description: "A brilliant valley" },
  { src: "/apollo/draft/elements/3.png", name: "Field", description: "A brilliant field" },
  { src: "/apollo/draft/elements/4.png", name: "Lake", description: "A brilliant lake" },
  { src: "/apollo/draft/elements/5.png", name: "Ocean", description: "A brilliant ocean" },
  { src: "/apollo/draft/elements/6.png", name: "Morning", description: "A brilliant morning" },
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
