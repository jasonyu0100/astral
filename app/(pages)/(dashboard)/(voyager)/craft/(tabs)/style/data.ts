import {
  CraftSection,
  CraftTableRowProps,
} from "../../common/controller/table/row/main";

const craftStyleBrandSrcRoot = "/voyager/craft/style/brand";
const craftStyleIdeaSrcRoot = "/voyager/craft/style/idea";
const symbolSrcRoot = "/voyager/craft/style/symbol";

export const craftStyleSections: CraftSection[] = [
  {
    title: "Brand Icon",
    description: "The icon for the Cosmos Brand.",
    rows: [
      {
        name: "Icon BG SM",
        description: "",
        src: `${craftStyleBrandSrcRoot}/icon-bg-sm.png`,
      },
      {
        name: "Icon BG",
        description: "",
        src: `${craftStyleBrandSrcRoot}/icon-bg.png`,
      },
      {
        name: "Icon",
        description: "",
        src: `${craftStyleBrandSrcRoot}/icon.png`,
      },
    ],
  },
  {
    title: "Brand Logo",
    description: "The logo for the Cosmos Brand",
    rows: [
      {
        name: "Logo BG MD",
        description: "",
        src: `${craftStyleBrandSrcRoot}/logo-bg-md.png`,
      },
      {
        name: "Logo BG",
        description: "",
        src: `${craftStyleBrandSrcRoot}/logo-bg.png`,
      },
      {
        name: "Logo Text",
        description: "",
        src: `${craftStyleBrandSrcRoot}/logo-text.png`,
      },
      {
        name: "Logo",
        description: "",
        src: `${craftStyleBrandSrcRoot}/logo.png`,
      },
    ],
  },
  {
    title: "Brand Cover",
    description: "The cover for the Cosmos Brand",
    rows: [
      {
        name: "LinkedIn Cover",
        description: "",
        src: `${craftStyleBrandSrcRoot}/linkedin-cover.png`,
      },
      {
        name: "Screen Saver",
        description: "",
        src: `${craftStyleBrandSrcRoot}/screen-saver.png`,
      },
      {
        name: "YouTube Cover",
        description: "",
        src: `${craftStyleBrandSrcRoot}/youtube-cover.png`,
      },
    ],
  },
  {
    title: "Ideas",
    description: "The ideas behind the Cosmos Brand.",
    rows: [
      {
        name: "Card",
        description: "",
        src: `${craftStyleIdeaSrcRoot}/card.png`,
      },
      {
        name: "Constellation",
        description: "",
        src: `${craftStyleIdeaSrcRoot}/constellation.png`,
      },
      {
        name: "Newspaper",
        description: "",
        src: `${craftStyleIdeaSrcRoot}/newspaper.png`,
      },
      {
        name: "Portrait",
        description: "",
        src: `${craftStyleIdeaSrcRoot}/portrait.png`,
      },
      {
        name: "Chips",
        description: "",
        src: `${craftStyleIdeaSrcRoot}/chips.png`,
      },
      {
        name: "Polaroid",
        description: "",
        src: `${craftStyleIdeaSrcRoot}/polaroid.png`,
      },
      {
        name: "Record",
        description: "",
        src: `${craftStyleIdeaSrcRoot}/record.png`,
      },
      {
        name: "Sticky",
        description: "",
        src: `${craftStyleIdeaSrcRoot}/sticky.png`,
      },
    ],
  },
  {
    title: "Symbols",
    description: "The symbols behind the Cosmos Brand.",
    rows: [
      { name: "Passion", description: "", src: `${symbolSrcRoot}/passion.png` },
      { name: "Nature", description: "", src: `${symbolSrcRoot}/nature.png` },
      { name: "Launch", description: "", src: `${symbolSrcRoot}/launch.png` },
      { name: "Land", description: "", src: `${symbolSrcRoot}/land.png` },
      { name: "Voyager", description: "", src: `${symbolSrcRoot}/voyager.png` },
      {
        name: "Supernova",
        description: "",
        src: `${symbolSrcRoot}/supernova.png`,
      },
      { name: "Ocean", description: "", src: `${symbolSrcRoot}/ocean.png` },
      { name: "Atmos", description: "", src: `${symbolSrcRoot}/atmos.png` },
      { name: "Nebula", description: "", src: `${symbolSrcRoot}/nebula.png` },
      { name: "Stars", description: "", src: `${symbolSrcRoot}/stars.png` },
      { name: "Earth", description: "", src: `${symbolSrcRoot}/earth.png` },
      { name: "Pillars", description: "", src: `${symbolSrcRoot}/pillars.png` },
      {
        name: "Big Bang",
        description: "",
        src: `${symbolSrcRoot}/bigbang.png`,
      },
      { name: "Sky", description: "", src: `${symbolSrcRoot}/sky.png` },
      { name: "Space", description: "", src: `${symbolSrcRoot}/space.png` },
      {
        name: "Black Hole",
        description: "",
        src: `${symbolSrcRoot}/blackhole.png`,
      },
    ],
  },
];
