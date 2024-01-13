import { MomentObj } from "@/tables/flow/moment/main";
import { flowTable } from "@/tables/flow/table";
import { useState } from "react";

export interface MomentHandler {
  updateMoment: (moment: MomentObj) => MomentObj;
  addMoment: (moment: MomentObj) => MomentObj;
  updateMoments: (moments: MomentObj[]) => MomentObj[];
}

export interface useMomentInterface {
    momentId: string;
    moments: MomentObj[];
    _momentHandler: MomentHandler;
}

export const useMoment = () : useMomentInterface => {
  const [moments, changeMoments] = useState<MomentObj[]>(
    flowTable.moment.examples
  );
  const [momentId, changeMomentId] = useState<string>(
    moments.at(0)?.id || ""
  );

  const _momentHandler: MomentHandler = {
    updateMoments: (moments: MomentObj[]) => {
      changeMoments(moments);
      changeMomentId(moments.at(0)?.id || "")
      return moments;
    },
    updateMoment: (moment: MomentObj) => {
      changeMomentId(moment.id);
      return moment;
    },
    addMoment: (moment: MomentObj) => {
      changeMoments((prev) => [...prev, moment]);
      changeMomentId(moment.id);
      return moment;
    },
  };

  return {
    momentId,
    moments,
    _momentHandler,
  };
};
