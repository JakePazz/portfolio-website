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
  },
  {
    title: "T-Level Digital Production Design & Development",
    description: "A qualification, equivalent to 3 A-Levels, developed in consultation with employers to learn the skills needed for industry. Covers the core knowledge of the digital sector as well as a placement to apply skills gained to the workplace",
    organisation: {
      name: "Fareham College",
      link: "https://shcg.ac.uk/fareham-college/"
    },
    keyPoints: [
      "Predicted Distinction overall, with an A (achieved) for the core component and Distinction (predicted) for the occupational specialism",
      "Also achieved a Grade A in Level 3 Mathematical Studies Core Maths",
    ],
    start: {
      month: 9,
      year: 2023,
    },
    links: [
      {
        title: "T-Level DPDD",
        url: "https://qualifications.pearson.com/en/qualifications/t-levels/digital-production-design-and-development.html#%2Ftab-September2023"
      }
    ]
  }
]