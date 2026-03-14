import type { LayoutServerLoad } from "./$types";
import type { Tinformation } from "$lib/types/information";
import { error } from "@sveltejs/kit";
import { fetchAPI } from "$lib/server/api";

export const load: LayoutServerLoad = async ({ url }) => {

  const information: Tinformation | undefined = await fetchAPI("/information")
  if (!information) {
    error(500, { message: "Information cannot be retrieved from API" })
  }

  const { pathname } = url;

  return {
    information,
    pathname
  }
}