"use client";

import { DraftController } from "./draft-epic/main";
import { DraftControllerCenterSection } from "./draft-epic/center/main";
import { DraftStep } from "./draft-epic/bottom/steps/step/main";
import { DraftControllerSteps } from "./draft-epic/bottom/steps/main";
import { Sidebar } from "./draft-epic/sidebar/main";
import { DraftControllerBottomRow } from "./draft-epic/bottom/main";
import { DraftStepsAdd } from "./draft-epic/bottom/add/main";
import { useRef, useState } from "react";
import { DraftWrapper } from "./draft-epic/wrapper/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { DraftStarObj } from "./model/point/star/main";
import { processModel } from "../../model/main";
import { StarHandler, StepHandler } from "./page";
import { motion } from "framer-motion";
import { DraftConstellationSection } from "./draft-epic/center/constellation/main";
import { ConstellationLinks } from "./draft-epic/center/constellation/stars/links/main";
import { ConstellationStar } from "./draft-epic/center/constellation/stars/star/main";

interface DraftViewProps {
  stepId: string;
  steps: ProcessStepObj[];
  stars: DraftStarObj[];
  starHandling: StarHandler;
  stepHandling: StepHandler;
}

// const Modal = ({ isOpen, onClose }) => {
//   return (
//     <div
//       className={`fixed inset-0 ${
//         isOpen ? "" : "hidden"
//       } flex justify-center items-center z-50`}
//     >
//       <div className="bg-white p-8 shadow-lg w-[650px] h-[770px] z-50">
//         <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
//         <p className="mb-4">Modal content goes here.</p>
//         <button
//           onClick={onClose}
//           className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Close Modal
//         </button>
//       </div>
//       <div className="fixed inset-0 bg-slate-950 opacity-50 pointer-events-none"></div>
//     </div>
//   );
// };

export function DraftView({
  stepId,
  steps,
  stars,
  starHandling,
  stepHandling,
}: DraftViewProps) {
  const constraintsRef = useRef(null);

  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };
  return (
    <DraftWrapper>
      <DraftController>
        <DraftControllerCenterSection>
          {/* <button className="text-white" onClick={openModal}>
            click me
          </button>
          <Modal isOpen={modalIsOpen} onClose={closeModal} /> */}
          <DraftConstellationSection>
            <ConstellationLinks stars={stars} />
            <motion.div
              className="absolute top-0 left- 0 w-full h-full"
              ref={constraintsRef}
            >
              {stars.map((star, i) => (
                <ConstellationStar
                  star={star}
                  constraintsRef={constraintsRef}
                  updateStar={(data) => starHandling.updateStar(i, data)}
                />
              ))}
            </motion.div>
          </DraftConstellationSection>
        </DraftControllerCenterSection>
        <DraftControllerBottomRow>
          <DraftControllerSteps>
            {steps.map((step) => (
              <DraftStep
                step={step}
                active={step.id === stepId}
                onClick={() => stepHandling.goToStep(step)}
              />
            ))}
          </DraftControllerSteps>
          <DraftStepsAdd
            onClick={() =>
              stepHandling.addStep({
                ...processModel.process.steps.step.example,
                id: Date.now().toFixed().toString(),
              })
            }
          />
        </DraftControllerBottomRow>
      </DraftController>
      <Sidebar />
    </DraftWrapper>
  );
}
