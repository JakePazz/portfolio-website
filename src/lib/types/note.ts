import type { Tdate } from "./date"

export type Tnote = {
  title: string,
  date: Tdate,
  contentId: string,
  routeName: string,
}