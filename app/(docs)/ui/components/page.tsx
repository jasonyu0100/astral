import Link from "next/link";

export default function UserInterface() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold dark:text-white">Components</h2>
      <p className="my-4 text-lg text-gray-500">
        Components refer to reusable building blocks or UI elements that are
        used to construct the various elements and layouts of your storybook.
        They can be as simple as buttons, checkboxes, or text input fields, or
        more complex elements like navigation menus, sliders, or cards.
      </p>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        Components help maintain consistency in design and functionality
        throughout your storybook by encapsulating specific features and
        behaviors.
      </p>
    </div>
  );
}
