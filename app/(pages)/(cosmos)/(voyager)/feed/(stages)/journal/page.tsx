"use client";
import isAuth from "@/utils/isAuth";
import { useMoment } from "@/(pages)/(cosmos)/(apollo)/space/[id]/handler/moments/main";
import { FeedView } from "../../view";

function Page() {
  const { momentId, moments, _momentHandler } = useMoment();

  return <FeedView moments={moments} />;
}

export default isAuth(Page);
