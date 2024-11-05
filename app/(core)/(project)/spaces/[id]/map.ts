const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      mission: {
        link: (id: string) => `${baseUrl}/${id}/mission`,
      },
      chat: {
        link: (id: string) => `${baseUrl}/${id}/chat`,
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
