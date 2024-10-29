const baseUrl = `/public`;

export const publicSpaceMap = {
  account: {
    link: (id: string) => `${baseUrl}/${id}/`,
  },
  link: baseUrl,
};
