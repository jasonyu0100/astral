import FlowSourceControlStem from "./stem/main";
import FlowSourceControlLeaf from "./leaves/leaf/main";
import FlowSourceControlLeaves from "./leaves/main"

export default function FlowSourceControlBranch() {
  return (
    <div className="flex flex-row space-x-[4rem] items-center">
      <FlowSourceControlStem/>
      <FlowSourceControlLeaves>
        <FlowSourceControlLeaf/>
        <FlowSourceControlLeaf/>
        <FlowSourceControlLeaf/>
        <FlowSourceControlLeaf/>
      </FlowSourceControlLeaves>
    </div>
  );
}
