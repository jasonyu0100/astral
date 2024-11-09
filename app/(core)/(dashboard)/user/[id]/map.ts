const baseUrl = `/user`;

export const userMap = {
  profile: {
    link: (id: string) => `${baseUrl}/${id}/profile`,
  },
  link: baseUrl,
};
