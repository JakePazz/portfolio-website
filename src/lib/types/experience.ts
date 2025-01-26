import type { Tdate } from "$lib/types/date"

export type Texperience = {
  title: string,
  organisation: {
    name: string,
    link: string,
  },
  description: string,
  keyPoints: string[],
  start: Tdate,
  end?: Tdate,
  links?: TexperienceLink[]
}

type TexperienceLink = {
  title: string,
  url: string,
}