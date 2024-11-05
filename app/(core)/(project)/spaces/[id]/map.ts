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
      space: {
        link: (id: string) => `${baseUrl}/${id}/space`,
      },
      launch: {
        link: (id: string) => `${baseUrl}/${id}/launch`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
