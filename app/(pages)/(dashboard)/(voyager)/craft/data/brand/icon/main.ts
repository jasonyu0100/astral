import { CraftFolder } from "../../../data";

const srcRoot = "/voyager/craft/brandicon/";

export const iconFolder : CraftFolder = {
    name: "Brand Icons",
    files: [
      {
        name: "Icon BG SM",
        description: "",
        src: `${srcRoot}/icon/icon-bg-sm.png`,
      },
      {
        name: "Icon BG",
        description: "",
        src: `${srcRoot}/icon/icon-bg.png`,
      },
      {
        name: "Icon",
        description: "",
        src: `${srcRoot}/icon/icon.png`,
      },
    ],
}