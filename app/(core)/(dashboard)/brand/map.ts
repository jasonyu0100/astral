const baseUrl = `/brand`;

export const brandMap = {
  drive: {
    manage: {
      link: `${baseUrl}/manage/home`,
      home: {
        link: `${baseUrl}/manage/home`,
      },
      gallery: {
        id: {
          link: (id: string) => `${baseUrl}/manage/gallery/${id}`,
        },
      },
      collection: {
        id: {
          link: (id: string) => `${baseUrl}/manage/collection/${id}`,
        },
      },
    },
    uploads: {
      link: `${baseUrl}/uploads`,
    },
    link: `${baseUrl}`,
  },
};
