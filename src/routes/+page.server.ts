import type { PageServerLoad } from "./$types";
import type { Tinformation } from "$lib/types/information";
import { error } from "@sveltejs/kit";
import { fetchAPI } from "$lib/server/api";
import type { TexperiencesResponse, TProjectsResponse, TSkillsResponse } from "$lib/types/api";


export const load: PageServerLoad = async () => {

  const information: Tinformation | undefined = await fetchAPI("/information")
  if (!information) {
    error(500, { message: "Information cannot be retrieved from API" })
  }

  const experiences: TexperiencesResponse | undefined = await fetchAPI("/experiences")
  if (!experiences) {
    error(500, { message: "Experiences cannot be retrieved from API" })
  }

  const skills: TSkillsResponse | undefined = await fetchAPI("/skills")
  if (!skills) {
    error(500, { message: "Skills cannot be retrieved from API" })
  }

  const projects: TProjectsResponse | undefined = await fetchAPI("/projects")
  if (!projects) {
    error(500, { message: "Projects cannot be retrieved from API" })
  }

  return {
    information,
    experiences: experiences.experiences,
    knownSkills: skills.known,
    learningSkills: skills.learning,
    projects: projects.projects,
  }
}