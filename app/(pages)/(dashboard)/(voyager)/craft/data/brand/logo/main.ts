import { CraftFolder } from "../../../data";

const srcRoot = "/voyager/craft/brand";

export const logoFolder : CraftFolder = {
    name: "Brand Logos",
    files: [
      {
        name: "Logo BG MD",
        description: "",
        src: `${srcRoot}/logo/logo-bg-md.png`,
      },
      {
        name: "Logo BG",
        description: "",
        src: `${srcRoot}/logo/logo-bg.png`,
      },
      {
        name: "Logo Text",
        description: "",
        src: `${srcRoot}/logo/logo-text.png`,
      },
      {
        name: "Logo",
        description: "",
        src: `${srcRoot}/logo/logo.png`,
      },
    ],
}