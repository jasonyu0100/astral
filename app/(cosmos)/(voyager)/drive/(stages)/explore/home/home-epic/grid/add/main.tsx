import { HomeGalleryAddCover } from "./cover/main";
import { HomeGalleryAddInfo } from "./info/main";
import { HomeGridContainer } from "../container/main";

interface InputProps extends React.ComponentPropsWithoutRef<"button"> {}

export function HomeGalleryAdd({ ...props }: InputProps) {
  return (
    <button {...props}>
      <HomeGridContainer>
        <HomeGalleryAddCover />
        <HomeGalleryAddInfo />
      </HomeGridContainer>
    </button>
  );
}
