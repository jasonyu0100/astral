import GalleryMuseumDisplayAuthor from "./display/author/main";
import GalleryMuseumDisplayDescription from "./display/description/main";
import GalleryMuseumDisplay from "./display/main";
import GalleryMuseumDisplayInscription from "./display/inscription/main";
import GalleryMuseumMedia from "./media/main";
import GalleryMuseumInscriptionTitle from "./display/inscription/title/main";
import GalleryMuseumInscriptionDate from "./display/inscription/date/main";

export interface GalleryMuseumSection {
  title: string;
  works: GalleryMuseumRowProps[];
  description: string;
}

export interface GalleryMuseumRowProps {
  author: string;
  title: string;
  date: string;
  description: string;
  src: string;
}

export default function GalleryMuseumRow({
  author,
  title,
  date,
  description,
  src,
}: GalleryMuseumRowProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-[50px]">
      <GalleryMuseumMedia src={src} />
      <GalleryMuseumDisplay>
        <GalleryMuseumDisplayAuthor>{author}</GalleryMuseumDisplayAuthor>
        <GalleryMuseumDisplayInscription>
          <GalleryMuseumInscriptionTitle>{title}</GalleryMuseumInscriptionTitle>
          <GalleryMuseumInscriptionDate>{date}</GalleryMuseumInscriptionDate>
        </GalleryMuseumDisplayInscription>
        <GalleryMuseumDisplayDescription>
          {description}
        </GalleryMuseumDisplayDescription>
      </GalleryMuseumDisplay>
    </div>
  );
}
