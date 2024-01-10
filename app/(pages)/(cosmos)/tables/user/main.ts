import { exampleGallerys } from "../gallery/main";
import { exampleSpaces } from "../space/main";

export interface UserObj {
  id: string;
  name: string;
  email: string;
  password: string;
  spaceIds: string[];
  galleryIds: string[];
}

export const exampleUser: UserObj = {
  id: "0",
  name: "John Smith",
  email: "email@example.com",
  password: "abcd1234",
  spaceIds: exampleSpaces.map((space) => space.id),
  galleryIds: exampleGallerys.map((gallery) => gallery.id),
};

export const exampleUsers: UserObj[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    password: "abcd1234",
    spaceIds: exampleSpaces.map((space) => space.id),
    galleryIds: exampleGallerys.map((gallery) => gallery.id),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    password: "abcd1234",
    spaceIds: exampleSpaces.map((space) => space.id),
    galleryIds: exampleGallerys.map((gallery) => gallery.id),
  },
];
