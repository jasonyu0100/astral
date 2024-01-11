export const driveMap = {
  drive: {
    search: {
      link: "/drive/search",
    },
    collect: {
      link: "/drive/collect",
      gallery: {
        id: {
          link: (id: string) => `/drive/manage/gallery/${id}`,
        },
      },
      collection: {
        id: {
          link: (id: string) => `/drive/manage/collection/${id}`,
        },
      },
    },
    connect: {
      link: "/drive/connect",
    },
    link: "/drive",
  },
};
