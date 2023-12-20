export default function CraftAddSectionDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="w-full text-white text-base font-normal leading-normal">
      {description}
    </div>
  );
}
