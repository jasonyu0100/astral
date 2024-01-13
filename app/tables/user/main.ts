import { FileObj, exampleFile } from "../file/main";
import { exampleGallerys } from "../gallery/main";
import { exampleSpaces } from "../space/main";

export interface UserObj {
  id: string;
  name: string;
  email: string;
  googleId: string;
  accessToken: string;
  profileImage: FileObj;
  spaceIds: string[];
  galleryIds: string[];
}

export const exampleUser: UserObj = {
  id: "0",
  googleId: "0",
  accessToken: "0",
  name: "John Smith",
  email: "email@example.com",
  spaceIds: exampleSpaces.map((space) => space.id),
  galleryIds: exampleGallerys.map((gallery) => gallery.id),
  profileImage: exampleFile,
};

export const exampleUsers: UserObj[] = [
  {
    id: "1",
    googleId: "0",
    accessToken: "0",
    name: "John Smith",
    email: "john@example.com",
    spaceIds: exampleSpaces.map((space) => space.id),
    galleryIds: exampleGallerys.map((gallery) => gallery.id),
    profileImage: exampleFile,
  },
  {
    id: "2",
    googleId: "0",
    accessToken: "0",
    name: "Jane Smith",
    email: "jane@example.com",
    spaceIds: exampleSpaces.map((space) => space.id),
    galleryIds: exampleGallerys.map((gallery) => gallery.id),
    profileImage: exampleFile,
  },
];
