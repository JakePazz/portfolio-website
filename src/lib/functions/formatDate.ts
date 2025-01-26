import type { Tdate } from "$lib/types/date"

export function formatDate(date: Tdate) {
  if (date.month) {
    const startMonthWritten = new Date(2000, date.month - 1, 1).toLocaleString("default", { month: "short"})
    return `${startMonthWritten}. ${date.year}`
  }

  return date.year
}