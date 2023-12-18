"use client";

import CraftAddSectionDescription from "../description/main";
import CraftAddSectionTitle from "../title/main";

export default function CraftAddSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col space-y-[2rem]">
      <CraftAddSectionTitle title={title} />
      <CraftAddSectionDescription description={description} />
    </div>
  );
}
