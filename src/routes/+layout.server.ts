import { MongoClient } from "mongodb";
import { MONGODB_URI } from "$env/static/private"
import type { LayoutServerLoad } from "./$types";
import type { Tinformation } from "$lib/types/information";
import { error } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ url }) => {

  const mongo = new MongoClient(MONGODB_URI)
  const db = mongo.db("portfolio")

  if (!db) {
    error(500, { message: "portfolio database not found" })
  }

  // Get personalInformation
  const informationCollection = db.collection<Tinformation>("information")
  const information = await informationCollection.findOne({}, {
    projection: {
      _id: 0, // Removes _id from return object
    }
  })

  if (!information) {
    error(500, { message: "No information found from DB" })
  }

  const { pathname } = url;

  return {
    information,
    pathname
  }
}