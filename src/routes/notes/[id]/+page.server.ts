import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';
import { MONGODB_URI, VERCEL_BLOB_BASE_URL } from "$env/static/private";
import { MongoClient } from "mongodb";
import type { Tnote } from "$lib/types/note";

export const load: PageServerLoad = async ({ params }) => {
  
  const routeId = params.id

  const mongo = new MongoClient(MONGODB_URI)
  const db = mongo.db("portfolio")

  if (!db) {
    error(500, { message: "portfolio database not found" })
  }

  const notesCollection = db.collection("notes")
  const note = await notesCollection.findOne<Tnote>({routeName: routeId}, {
    projection: {
      _id: 0,
    }
  })

  if (!note) {
    error(404, { message: `Notes not found with route of '${routeId}' within DB`})
  }
  
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