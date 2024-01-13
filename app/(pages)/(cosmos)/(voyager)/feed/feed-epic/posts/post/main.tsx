import { PostBody } from "./body/main";
import { PostDivider } from "./divider/main";
import { PostMedia } from "./media/main";
import { PostInfo } from "./info/main";
import { PostDescription } from "./description/main";
import { MomentObj } from "@/tables/flow/moment/main";
import { useState } from "react";
import { userTable } from "@/tables/user/table";

export function FeedPost({
  moment,
  children,
}: {
  moment: MomentObj;
  children: React.ReactNode;
}) {
  const [user, changeUser] = useState(userTable.example)

  return (
    <div className="flex flex-col w-full space-y-[3rem] items-center py-[2rem]">
      <div className="w-full flex flex-row space-x-[100px] items-center justify-center">
        <PostMedia moment={moment} />
        <PostDescription>
          <PostInfo user={user}/>
          <PostBody>
            {moment.log}
            {moment.spaceId}
          </PostBody>
        </PostDescription>
      </div>
      <PostDivider />
    </div>
  );
}
