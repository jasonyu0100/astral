import { WorkTabStages } from "../../tabs/main";
import { WorksView } from "../../view";

export default function Page() {
  return (
    <WorksView type={WorkTabStages.All}/>
  );
}
