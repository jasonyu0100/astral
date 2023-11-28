import Link from "next/link";

export default function TypographyPage() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold dark:text-white">Typography</h2>
      <p className="my-4 text-lg text-gray-500">
        Typography refers to the style, arrangement, and presentation of text in
        your storybook. It includes the choice of fonts, font sizes, line
        spacing, letter spacing, and other typographic elements.
      </p>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        Typography plays a crucial role in conveying the tone, mood, and
        readability of your storybook's content. Consistent and well-chosen
        typography can enhance the visual appeal and overall user experience of
        your website.
      </p>
    </div>
  );
}
