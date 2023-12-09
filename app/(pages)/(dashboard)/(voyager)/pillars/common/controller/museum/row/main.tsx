import PillarsMuseumDisplayAuthor from "./display/author/main";
import PillarsMuseumDisplayDescription from "./display/description/main";
import PillarsMuseumDisplay from "./display/main";
import PillarsMuseumDisplayInscription from "./display/inscription/main";
import PillarsMuseumMedia from "./media/main";
import PillarsMuseumInscriptionTitle from "./display/inscription/title/main";
import PillarsMuseumInscriptionDate from "./display/inscription/date/main";

export interface PillarsMuseumSection {
  title: string;
  works: PillarsMuseumRowProps[];
  description: string;
}

export interface PillarsMuseumRowProps {
  author: string;
  title: string;
  date: string;
  description: string;
  src: string;
}

export default function PillarsMuseumRow({
  author,
  title,
  date,
  description,
  src,
}: PillarsMuseumRowProps) {
  return (
    <div className="flex flex-row w-full justify-evenly items-center">
      <PillarsMuseumMedia src={src} />
      <PillarsMuseumDisplay>
        <PillarsMuseumDisplayAuthor>{author}</PillarsMuseumDisplayAuthor>
        <PillarsMuseumDisplayInscription>
          <PillarsMuseumInscriptionTitle>{title}</PillarsMuseumInscriptionTitle>
          <PillarsMuseumInscriptionDate>{date}</PillarsMuseumInscriptionDate>
        </PillarsMuseumDisplayInscription>
        <PillarsMuseumDisplayDescription>
          {description}
        </PillarsMuseumDisplayDescription>
      </PillarsMuseumDisplay>
    </div>
  );
}
