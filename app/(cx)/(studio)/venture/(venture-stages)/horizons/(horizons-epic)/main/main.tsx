import { HorizonsCore } from "./core/main";
import { HorizonsSidebar } from "./core/sidebar/main";

export function HorizonsMain() {
  return (
    <div className='flex h-full w-full flex-row'>
      <HorizonsSidebar />
      <HorizonsCore />
    </div>
  );
}
