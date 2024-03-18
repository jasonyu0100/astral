import { SpaceCount } from "./count/main";
import { SpaceDate } from "./date/main";
import { SpaceDay } from "./day/main";
import { SpaceGenre } from "./genre/main";
import { SpaceInfo } from "./info/main";

export function StudioSpaceBody() {
  return (
    <div className='flex flex-row space-x-[50px]'>
      <SpaceCount />
      <SpaceInfo />
      <SpaceDay />
      <SpaceGenre />
      <SpaceDate />
    </div>
  );
}
