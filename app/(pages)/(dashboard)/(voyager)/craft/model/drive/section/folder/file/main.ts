export interface CraftFile {
  name: string;
  description: string;
  src: string;
}

const srcRoot = "/voyager/craft/themes";

export const exampleCraftFile = {
  name: "Passion",
  description: "",
  src: `${srcRoot}/symbols/passion.png`,
};
