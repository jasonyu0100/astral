export const driveMap = {
  drive: {
    search: {
      link: "/drive/search",
    },
    explore: {
      link: "/drive/explore/home",
      gallery: {
        id: {
          link: (id: string) => `/drive/explore/gallery/${id}`,
        },
      },
      collection: {
        id: {
          link: (id: string) => `/drive/explore/collection/${id}`,
        },
      },
    },
    connect: {
      link: "/drive/connect",
    },
    link: "/drive",
  },
};
