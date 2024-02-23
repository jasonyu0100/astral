const baseUrl = `/archive`;

export const archiveMap = {
  archive: {
    search: {
      link: `${baseUrl}/search`,
    },
    explorer: {
      link: `${baseUrl}/explorer/gallerys-view`,
      collections: {
        id: {
          link: (id: string) => `${baseUrl}/explorer/collections-view/${id}`,
        },
      },
      resources: {
        id: {
          link: (id: string) => `${baseUrl}/explorer/resources-view/${id}`,
        },
      },
    },
    connect: {
      link: `${baseUrl}/connect`,
    },
    link: `${baseUrl}`,
  },
};
