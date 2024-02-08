const baseUrl = `/vault`;

export const vaultMap = {
  vault: {
    search: {
      link: `${baseUrl}/search`,
    },
    explorer: {
      link: `${baseUrl}/explorer/home-view`,
      gallery: {
        id: {
          link: (id: string) => `${baseUrl}/explorer/gallery-view/${id}`,
        },
      },
      collection: {
        id: {
          link: (id: string) => `${baseUrl}/explorer/collection-view/${id}`,
        },
      },
    },
    connect: {
      link: `${baseUrl}/connect`,
    },
    link: `${baseUrl}`,
  },
};
