"use client";
import { SpaceTabStages } from "../../tabs/main";
import { SpacesView } from "../../spaces-epic/view";
import insideCosmos from "@/utils/isAuth";

function Page() {

  return <SpacesView type={SpaceTabStages.Then} />;
}

export default insideCosmos(Page);