import { API_BASE_URL, API_ACCESS_TOKEN } from "$env/static/private"
import { error } from "@sveltejs/kit";

export async function fetchAPI<T>(route: string, options: RequestInit = {}) {
  try {    
    const headers = new Headers(options.headers)
    headers.append("Authorization", "Bearer " + API_ACCESS_TOKEN)
    
    const response = await fetch(API_BASE_URL + route, {
      headers: headers,
      ...options
    })

    if (!response.ok) {
      error(500, { message: `Failed to fetch data from ${route}. Please try again` })
    }
    
    const data: T = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}