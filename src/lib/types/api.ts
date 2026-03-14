import type { Texperience } from "./experience"
import type { Tnote } from "./note"
import type { Tproject } from "./project"
import type { Tskill } from "./skill"

export type TexperiencesResponse = {
  experiences: Texperience[]
}

export type TSkillsResponse = {
  known: Tskill[],
  learning: Tskill[]
}

export type  TProjectsResponse = {
  projects: Tproject[]
}

export type TNotesResponse = {
  note: Tnote
}