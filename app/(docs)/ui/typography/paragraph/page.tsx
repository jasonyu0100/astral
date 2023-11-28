import ShowcaseComponent from "@ui/showcase";
import DefaultParagraph from "./default-paragraph";
import LeadingParagraph from "./leading-paragraph";
import FirstLetterParagraph from "./first-letter-paragraph";
import BoldParagraph from "./bold-paragraph";
import ItalicParagraph from "./italic-paragraph";
import UnderlineParagraph from "./underline-paragraph";

export default function ParagraphPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Paragraph">
        <DefaultParagraph/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Leading Paragraph">
        <LeadingParagraph/>
      </ShowcaseComponent>
      <ShowcaseComponent title="First Letter Paragraph">
        <FirstLetterParagraph/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Bold Paragraph">
        <BoldParagraph/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Italic Paragraph">
        <ItalicParagraph/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Underline Paragraph">
        <UnderlineParagraph/>
      </ShowcaseComponent>
    </div>
  );
}
