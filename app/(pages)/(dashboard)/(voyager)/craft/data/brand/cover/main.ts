import { CraftFolder } from "../../../data";

const srcRoot = "/voyager/craft/brand";

export const coverFolder : CraftFolder = {
    name: "Brand Cover",
    files: [
      {
        name: "LinkedIn Cover",
        description: "",
        src: `${srcRoot}/cover/linkedin-cover.png`,
      },
      {
        name: "Screen Saver",
        description: "",
        src: `${srcRoot}/cover/screen-saver.png`,
      },
      {
        name: "YouTube Cover",
        description: "",
        src: `${srcRoot}/cover/youtube-cover.png`,
      },
    ],
}