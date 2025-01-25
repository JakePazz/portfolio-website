export type Texperience = {
  title: string,
  organisation: {
    name: string,
    link: string,
  },
  description: string,
  keyPoints: string[],
  start: TexperienceDate,
  end?: TexperienceDate,
  links?: TexperienceLink[]
}

type TexperienceLink = {
  title: string,
  url: string,
}

export type TexperienceDate = {
  month?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  year: number,
}