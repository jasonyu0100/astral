const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      mission: {
        link: (id: string) => `${baseUrl}/${id}/mission`,
      },
      channel: {
        link: (id: string) => `${baseUrl}/${id}/channel`,
      },
      scene: {
        link: (id: string) => `${baseUrl}/${id}/scene`,
      },
      launch: {
        link: (id: string) => `${baseUrl}/${id}/launch`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
