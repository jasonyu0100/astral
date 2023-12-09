"use client";

import QuestClapperContainer from "../../common/controller/clapper/container/main";
import ClapperContents from "../../common/controller/clapper/contents/main";
import QuestClapper from "../../common/controller/clapper/main";
import QuestRecord from "../../common/controller/record/main";
import QuestController from "../../common/controller/main";
import QuestGuideLink from "../../common/guide/body/link/main";
import QuestGuideBody from "../../common/guide/body/main";
import QuestGuideController from "../../common/guide/main";
import QuestGuideWrapper from "../../common/guide/wrapper/main";
import QuestRecordLog from "../../common/controller/record/log/main";

export default function QuestApolloPage() {
  return (
    <QuestGuideWrapper>
      <QuestController>
        <QuestClapper>
          <QuestClapperContainer>
            <ClapperContents />
          </QuestClapperContainer>
        </QuestClapper>
        <QuestRecord>
          <QuestRecordLog></QuestRecordLog>
          <QuestRecordLog/>
        </QuestRecord>
      </QuestController>
      <QuestGuideController>
        <QuestGuideBody>
          <QuestGuideLink>Day 10</QuestGuideLink>
          <QuestGuideLink>Day 5</QuestGuideLink>
          <QuestGuideLink>Day 0</QuestGuideLink>
        </QuestGuideBody>
      </QuestGuideController>
    </QuestGuideWrapper>
  );
}
