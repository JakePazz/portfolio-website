import type { Tdate } from "./date"

export type Tproject = {
  title: string,
  description: string,
  start: Tdate,
  end?: Tdate,
  private: boolean, // Will add 'Private Project' to top line
  skills?: string[], // Retrieves corresponding skill from skill.ts data using it's {id}
  links?: {
    github?: string,
    liveSite?: string,
    readMore?: string,
  },
  imagesFolder: string,
  imagesCount: number,
}