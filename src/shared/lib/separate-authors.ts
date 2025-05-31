export const separateAuthors = (rawAuthors: string): string[] => {
  const pattern = /([^,y]+)([,\s*y]*)/gi;

  const matches = rawAuthors.match(pattern);

  if (!matches) {
    return [];
  }

  const authors = matches.map((match) => {
    const cleanedMatch = match.trim().replace(/,$/, "").replace(/\sy\s*$/, "");
    return cleanedMatch;
  });

  return authors;
}