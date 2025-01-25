import type { Texperience } from "$lib/types/experience";

export const experiences: Texperience[] = [
  {
    title: "Software Development Intern",
    description: "Psion Vision is a company developing software for smart industrial eyewear to be used in a plethora of different industries.",
    organisation: {
      name: "Psion Vision",
      link: "https://www.psionconsulting.co.uk/"
    },
    keyPoints: [
      "I worked on creating a customer portal utilising SvelteKit and TypeScript, taking it from designs to a developed website",
      "Adopted best practices within version control (Git) and design",
      "Basic familiarity with AWS Lambda, DynamoDB, API Endpoints",
      "Spent time working independently and as apart of a team",
    ],
    start: {
      month: 11,
      year: 2023,
    },
    end: {
      month: 12,
      year: 2024,
    }
  },
  {
    title: "Mobile App Project",
    description: "Currently the team leader on a project, facilitated by Fareham College, to design and develop a mobile app for use by residents of Fareham Borough.",
    organisation: {
      name: "Fareham Borough Council",
      link: "https://www.fareham.gov.uk/",
    },
    keyPoints: [
      "Experience with new development technologies including React Native",
      "Gained leadership experience within software development and led design and progress meetings with project sponsor & Fareham Borough Council"
    ],
    start: {
      month: 11,
      year: 2024
    },
    links: [
      {
        title: "Fareham College",
        url: "https://shcg.ac.uk/fareham-college/"
      }
    ]
  }
]