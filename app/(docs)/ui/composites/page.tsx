import Link from "next/link";

export default function CompositePage() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold dark:text-white">Composites</h2>
      <p className="my-4 text-lg text-gray-500">
        Composites are combinations or compositions of multiple components,
        visuals, and textual elements that form larger, more complex units
        within your storybook. They are created by assembling individual
        components and arranging them in a specific layout or structure.
      </p>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        Composites can represent entire sections, pages, or even interactive
        modules within your storybook. They help organize and present content in
        a coherent and meaningful way, contributing to the overall storytelling
        experience.
      </p>
    </div>
  );
}
