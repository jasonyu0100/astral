const baseUrl = `/archive`;

export const archiveMap = {
  archive: {
    search: {
      link: `${baseUrl}/search`,
    },
    explorer: {
      link: `${baseUrl}/explorer/gallerys`,
      collections: {
        id: {
          link: (id: string) => `${baseUrl}/explorer/collections/${id}`,
        },
      },
      resources: {
        id: {
          link: (id: string) => `${baseUrl}/explorer/resources/${id}`,
        },
      },
    },
    connect: {
      link: `${baseUrl}/connect`,
    },
    link: `${baseUrl}`,
  },
};
