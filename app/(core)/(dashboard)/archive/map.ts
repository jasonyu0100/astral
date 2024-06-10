const baseUrl = `/archive`;

export const archiveMap = {
  archive: {
    search: {
      link: `${baseUrl}/search`,
    },
    explorer: {
      link: `${baseUrl}/explorer/home`,
      home: {
        link: `${baseUrl}/explorer/home`,
      },
      gallery: {
        id: {
          link: (id: string) => `${baseUrl}/explorer/gallery/${id}`,
        },
      },
      collection: {
        id: {
          link: (id: string) => `${baseUrl}/explorer/collection/${id}`,
        },
      },
    },
    connect: {
      link: `${baseUrl}/connect`,
    },
    link: `${baseUrl}`,
  },
};
