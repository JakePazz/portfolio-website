import { MongoClient } from "mongodb";
import type { PageServerLoad } from "./$types";
import { MONGODB_URI } from "$env/static/private"
import type { Tinformation } from "$lib/types/information";
import type { Texperience } from "$lib/types/experience";
import type { Tskill } from "$lib/types/skill";
import type { Tproject } from "$lib/types/project";
import { error } from "@sveltejs/kit";


export const load: PageServerLoad = async () => {

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

  // Get experiences
  const experiencesCollection = db.collection<Texperience>("experiences")
  const experiences = await experiencesCollection.find({}, {
    projection: {
      _id: 0,
    }
  }).toArray()

  if (!experiences) {
    error(500, { message: "No experiences found from DB" })
  }

  // Get skills
  const skillsCollection = db.collection<Tskill>("skills")
  const skills = await skillsCollection.find({}, {
    projection: {
      _id: 0,
    }
  }).toArray()
  
  if (!skills) {
    error(500, { message: "No skills found from DB" })
  }

  // Divide skills to known and learning
  const knownSkills = skills.filter((skill) => skill["type"] === "known")
  const learningSkills = skills.filter((skill) => skill["type"] === "learning")

  // Get projects
  const projectsCollection = db.collection<Tproject>("projects")
  const projects = await projectsCollection.find({}, {
    projection: {
      _id: 0,
    }
  }).toArray()

  if (!projects) {
    error(500, { message: "No projects found from DB" })
  }

  return {
    information,
    experiences,
    knownSkills,
    learningSkills,
    projects,
  }
}