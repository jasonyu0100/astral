import { PostBody } from "./body/main";
import { PostDivider } from "./divider/main";
import { PostMedia } from "./media/main";
import { PostInfo } from "./info/main";
import { PostDescription } from "./description/main";
import { MomentObj } from "@/tables/flow/moment/main";

export function FeedPost({
  moment,
  children,
}: {
  moment: MomentObj;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full space-y-[3rem] items-center py-[2rem]">
      <div className="w-full flex flex-row space-x-[100px] items-center justify-center">
        <PostMedia />
        <PostDescription>
          <PostInfo />
          <PostBody>
            Lorem ipsum dolor sit amet consectetur. Risus aliquam id amet
            laoreet velit. Fringilla etiam ac pharetra auctor sed sed aenean in
            rhoncus. Quisque diam egestas eget facilisis scelerisque eleifend.
            Elementum blandit venenatis sagittis enim mauris faucibus fringilla.
          </PostBody>
        </PostDescription>
      </div>
      <PostDivider />
    </div>
  );
}
