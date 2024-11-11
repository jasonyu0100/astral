const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      focus: {
        link: (id: string) => `${baseUrl}/${id}/focus`,
      },
      channel: {
        link: (id: string) => `${baseUrl}/${id}/channel`,
      },
      space: {
        link: (id: string) => `${baseUrl}/${id}/space`,
      },
      public: {
        link: (id: string) => `${baseUrl}/${id}/public`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
