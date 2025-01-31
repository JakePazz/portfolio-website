import type { Tproject } from "$lib/types/project";

export const projects: Tproject[] = [
  {
    title: "Portfolio - this site!",
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
    imagesCount: 1,
    links: {
      github: "https://github.com/JakePazz",
      liveSite: "https://jakepazzard.dev"
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
    imagesCount: 3,
    private: true,
    links: {
      readMore: "test"
    }
  }
]