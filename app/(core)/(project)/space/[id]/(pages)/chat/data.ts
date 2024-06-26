export enum ChatRoles {
  Producer = 'Producer',
  Singer = 'Singer',
  Writer = 'Writer',
}

export const roleDescriptions: { [key in ChatRoles]: string } = {
  [ChatRoles.Producer]: `A music producer oversees the creation of a song using software tools, 
    shaping its sound and structure. They handle technical aspects like mixing and mastering, 
    ensuring the song meets artistic and technical standards.`,
  [ChatRoles.Singer]: `A singer contributes to a song by composing and performing its vocal parts, 
    including verses and choruses. They bring the lyrics to life with their voice, 
    often collaborating closely with songwriters and producers.`,
  [ChatRoles.Writer]: `A writer contributes to a song by crafting its lyrics and sometimes its melody, 
    telling a story or conveying emotions through words. 
    They collaborate with singers and producers to ensure the song's narrative aligns with its musical expression.`,
};
