import { GlassWindowContents } from "@/(components)/(glass)/window/contents/main";
import { GlassWindowFrame } from "@/(components)/(glass)/window/main";
import { GlassWindowPane } from "@/(components)/(glass)/window/pane/main";
import { glassFx } from "@/(style)/data";
import { GameDescription } from "../description/main";
import { PhaseDraw } from "../phase/draw/main";
import { PhaseOne } from "../phase/one/main";
import { PhaseReveal } from "../phase/reveal/main";
import { PhaseThree } from "../phase/three/main";
import { PhaseTwo } from "../phase/two/main";
import { ActionBar } from "./action-bar/main";
import { GameBoard } from "./board/main";
import { GameLog } from "./log/main";

export function DilemmaUi() {
  return (
    <div className='flex h-full flex-grow flex-col p-[3rem]'>
      <div className='flex h-4/5 flex-row space-x-[5rem]'>
        <GameBoard/>
        <GameLog/>
      </div>
      {/* <ActionBar/> */}
    </div>
  );
}
