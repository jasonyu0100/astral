const baseUrl = `/vault`;

export const vaultMap = {
  vault: {
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
    knowledge: {
      link: `${baseUrl}/knowledge`,
    },
    link: `${baseUrl}`,
  },
};
