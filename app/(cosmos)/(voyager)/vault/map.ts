const baseUrl = `/vault`;

export const vaultMap = {
  vault: {
    search: {
      link: `${baseUrl}/search`,
    },
    explore: {
      link: `${baseUrl}/explore/home`,
      gallery: {
        id: {
          link: (id: string) => `${baseUrl}/explore/gallery/${id}`,
        },
      },
      collection: {
        id: {
          link: (id: string) => `${baseUrl}/explore/collection/${id}`,
        },
      },
    },
    connect: {
      link: `${baseUrl}/connect`,
    },
    link: `${baseUrl}`,
  },
};
