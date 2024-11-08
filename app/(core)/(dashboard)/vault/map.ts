const baseUrl = `/vault`;

export const vaultMap = {
  vault: {
    finder: {
      link: `${baseUrl}/finder/home`,
      home: {
        link: `${baseUrl}/finder/home`,
      },
      gallery: {
        id: {
          link: (id: string) => `${baseUrl}/finder/gallery/${id}`,
        },
      },
      collection: {
        id: {
          link: (id: string) => `${baseUrl}/finder/collection/${id}`,
        },
      },
    },
    uploads: {
      link: `${baseUrl}/uploads`,
    },
    link: `${baseUrl}`,
  },
};
