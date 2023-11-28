import Link from "next/link";

export default function FormPage() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold dark:text-white">Forms</h2>
      <p className="my-4 text-lg text-gray-500">
        Forms are interactive elements in your storybook that allow users to
        input and submit data. They typically consist of various input fields
        like text fields, checkboxes, radio buttons, dropdown menus, and submit
        buttons.
      </p>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        Forms are used for a variety of purposes, such as collecting user
        information, submitting feedback, or enabling user interactions.
        Implementing well-designed and user-friendly forms in your storybook is
        crucial for engaging users and facilitating their interactions with your
        website.
      </p>
    </div>
  );
}
