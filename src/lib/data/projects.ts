import type { Tproject } from "$lib/types/project";

export const projects: Tproject[] = [
  {
    title: "Portfolio - this website!",
    description: "A customer facing survey website accompanied by a staff portal to enable the business to gain insights into customer opinions and preferences overtime anonymously.",
    start: {
      year: 2024,
      month: 12
    },
    private: false,
    skills: [
      "typescript",
      "nodejs",
      "svelte",
    ],
    imagesFolder: "portfolio",
    links: {
      github: "github.com/JakePazz",
    }
  },
  {
    title: "Feedback System",
    description: "A customer facing survey website accompanied by a staff portal to enable the business to gain insights into customer opinions and preferences overtime anonymously.",
    start: {
      year: 2024,
      month: 2,
    },
    end: {
      year: 2024,
      month: 12,
    },
    skills: [
      "svelte",
      "typescript",
      "nodejs",
      "javascript",
      "aws-services"
    ],
    imagesFolder: "laneway-coffee-feedback-system",
    private: true,
  }
]