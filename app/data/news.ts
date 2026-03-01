// ============================================================
// ✏️  EDITABLE CONTENT — Add, remove, or edit news items here
// ============================================================

export type NewsItem = {
  slug: string;
  category: string;
  title: string;
  date: string;
  author?: string;
  cover: string;           // shown on homepage card
  images: string[];        // gallery images on detail page (can be empty [])
  excerpt: string;         // short summary shown on cards / detail hero
  content: string;         // full article — supports basic HTML tags like <b>, <i>, <br/>
};

export const NEWS: NewsItem[] = [
  {
    slug: "onboarding-session",
    category: "INTERNAL UPDATE",
    title: "StudentsxCEOs Jakarta Batch 14 Officially Kicks Off with Onboarding Session",
    date: "February 28, 2026",
    author: "Data and Technology Division",
    cover: "/news/holiday-shopping-2025/cover.jpg",
    images: [
      "/news/holiday-shopping-2025/gallery-1.jpg",
      "/news/holiday-shopping-2025/gallery-2.jpg",
      "/news/holiday-shopping-2025/gallery-3.jpg",
    ],
    excerpt:
      "After going through the entire recruitment process from BOE to Associate, StudentsxCEOs Jakarta Batch 14 officially held its onboarding session on February 15, 2026.",
    content: `After completing recruitment journey from the BOE stage to Associates, StudentsxCEOs Jakarta Batch 14 officially began its new chapter with an onboarding session held on February 15, 2026. Conducted online, the session marked a significant milestone as the newly accepted members gathered for the first time as an official batch, ready to embark on a year of growth, collaboration, and impact.

The onboarding session opened with a welcoming speech from the CEO of SxC Jakarta. In the address, the CEO shared the organization’s vision, mission, and long-term aspirations, while emphasizing the importance of collaboration, proactiveness, and ownership within each role. The speech set the tone for the session, encouraging every member of Batch 14 to not only contribute professionally but also grow personally throughout their journey in SxC.

Following the opening remarks, the Board of Executives (BOE) was formally introduced. Each member shared their role and responsibilities, providing clarity on the organizational structure and leadership that will guide Batch 14 throughout the term. This introduction helped participants better understand how each function interconnects to support SxC’s broader goals.

The session continued with the CGC announcement, marking another important highlight of the event. This segment reinforced the organization’s commitment to structured governance and operational excellence, ensuring that all members are aligned with the standards and expectations moving forward.

To provide a comprehensive understanding of how SxC operates, representatives from each division presented an overview of their respective teams. These presentations covered the core responsibilities, key objectives, and strategic direction of each division, allowing members to see how their contributions will play a role in achieving collective goals.

The onboarding concluded with division-based discussions, where members gathered with their respective teams to connect on a more personal level. During these sessions, they discussed their scope of work, expectations, and initial plans for the upcoming term. This created a space for open communication, alignment, and the building of early team synergy.

Overall, the onboarding session served as a meaningful starting point for StudentsxCEOs Jakarta Batch 14. More than just an introduction, it was a foundation for commitment, collaboration, and shared ambition. As Batch 14 officially begins its journey, the spirit of unity and purpose established during onboarding sets a promising tone for an impactful year ahead.`,
  },
  
];