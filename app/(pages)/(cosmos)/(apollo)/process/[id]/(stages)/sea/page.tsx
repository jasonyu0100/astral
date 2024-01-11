"use client";
import isAuth from "@/utils/isAuth";
import { SeaView } from "./view";

function Page() {
  return <SeaView />;
}

export default isAuth(Page);