import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';
import { VERCEL_BLOB_BASE_URL } from "$env/static/private";
import type { Tnote } from "$lib/types/note";
import { fetchAPI } from "$lib/server/api";
import type { TNotesResponse } from "$lib/types/api";

export const load: PageServerLoad = async ({ params }) => {
  const noteResponse: TNotesResponse | undefined = await fetchAPI(`/notes/${params.id}`)
  if (!noteResponse) {
    error(500, { message: "Projects cannot be retrieved from API" })
  }
  const note: Tnote = noteResponse.note

  const blobUrl = `${VERCEL_BLOB_BASE_URL}/${note.contentId}.md`
  const response = await fetch(blobUrl)    
  if (!response.ok) {
    error(404, `Note not found with contentID of '${note.contentId}'`)
  }

  const blob = await response.blob()
  const content = await blob.text()

  return {
    date: note.date,
    title: note.title,
    content,
  }
}