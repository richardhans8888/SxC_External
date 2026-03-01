// ============================================================
// ✏️  EDITABLE CONTENT — Add, remove, or edit programs here
// ============================================================

export type ProgramItem = {
  slug: string;         // used for the URL: /programs/school-of-ideas
  badge: string;        // short name shown on the card badge
  category: string;     // shown on detail page pill
  title: string;        // card + detail page headline
  month: string;        // shown on homepage card button
  audience: string;     // who the program is for
  cover: string;        // homepage card background — place in public/programs/<slug>/cover.jpg
  images: string[];     // gallery images on detail page (can be empty [])
  excerpt: string;      // short summary for cards and detail hero
  content: string;      // full description — split on double newline into paragraphs
  highlights?: string[]; // optional bullet-point key takeaways shown in sidebar
};

export const PROGRAMS: ProgramItem[] = [
  {
    slug: "school-of-ideas",
    badge: "School of Ideas",
    category: "HIGH SCHOOL PROGRAM",
    title: "Offline Event for High School Students",
    month: "April",
    audience: "High School Students",
    cover: "/programs/school-of-ideas/cover.jpg",
    images: [
      "/programs/school-of-ideas/gallery-1.jpg",
      "/programs/school-of-ideas/gallery-2.jpg",
      "/programs/school-of-ideas/gallery-3.jpg",
    ],
    excerpt:
      "An immersive offline experience designed to help high school students discover their potential, develop their identity as future leaders, and get a head start on their journey.",
    content: `School of Ideas is StudentsxCEOs Jakarta's flagship program for high school students — a full-day offline event that combines personality exploration, inspirational talk shows, and hands-on workshops to unlock the leadership potential that already exists in every participant.

Through personality assessments and guided self-discovery sessions, students gain a clearer picture of their strengths, communication styles, and natural leadership tendencies. This isn't about fitting into a mold — it's about understanding who you already are and building on it.

The talk show segment brings in CEOs, founders, and industry professionals who share their real stories — the failures, the pivots, the moments that defined their paths. These conversations are designed to be honest, not polished, giving students a realistic and inspiring view of what leadership actually looks like.

Workshops are hands-on and collaborative, focused on practical skills like public speaking, creative problem-solving, and working effectively in teams. Students leave with more than knowledge — they leave with confidence, connections, and a sense of direction.

School of Ideas is free to attend and open to high school students across Jakarta. It is one of the most anticipated events in the StudentsxCEOs Jakarta annual calendar.`,
    highlights: [
      "Personality assessments & self-discovery",
      "Live talk show with CEOs & founders",
      "Hands-on leadership workshops",
      "Free to attend",
      "Open to all Jakarta high school students",
    ],
  },
  {
    slug: "sxcareer",
    badge: "SxCareer",
    category: "CAREER DEVELOPMENT",
    title: "Career Preparation Webinar",
    month: "April",
    audience: "Active Students & Fresh Graduates",
    cover: "/programs/sxcareer/cover.jpg",
    images: [
      "/programs/sxcareer/gallery-1.jpg",
      "/programs/sxcareer/gallery-2.jpg",
    ],
    excerpt:
      "A focused webinar series covering the six most competitive career tracks — Consulting, Banking, FMCG, Media, Technology, and Startup — plus strategic goal-setting sessions to help you land where you want to be.",
    content: `SxCareer is built for students and fresh graduates who are serious about their career direction and want real, specific guidance — not generic advice. The program runs as a series of focused webinars, each dedicated to a different industry track.

The six tracks covered are Consulting, Banking, FMCG, Media, Technology, and Startup. Each session features practitioners from that industry who share what the recruitment process actually looks like, what skills hiring managers prioritize, and what separates candidates who get offers from those who don't.

Beyond industry-specific sessions, SxCareer includes goal-setting workshops that help participants translate ambition into a concrete plan. These sessions draw on frameworks used in executive coaching to help participants define their career vision, identify the gaps they need to close, and build the habits that will get them there.

SxCareer is intentionally practical. Every session is structured around actionable takeaways — things participants can do the week after attending. Whether you're deciding between tracks, preparing for applications, or figuring out how to position yourself for a career pivot, SxCareer gives you the tools and the community to move forward with clarity.`,
    highlights: [
      "6 industry tracks: Consulting, Banking, FMCG, Media, Tech, Startup",
      "Practitioners sharing real recruitment insights",
      "Executive-style goal-setting frameworks",
      "Actionable weekly takeaways",
      "Open to active students & fresh graduates",
    ],
  },
  {
    slug: "sxcelerate",
    badge: "SxCelerate",
    category: "BOOTCAMP",
    title: "Two-Month Intensive Bootcamp",
    month: "May",
    audience: "Active Students",
    cover: "/programs/sxcelerate/cover.jpg",
    images: [
      "/programs/sxcelerate/gallery-1.jpg",
      "/programs/sxcelerate/gallery-2.jpg",
      "/programs/sxcelerate/gallery-3.jpg",
      "/programs/sxcelerate/gallery-4.jpg",
    ],
    excerpt:
      "The most intensive program in the StudentsxCEOs Jakarta lineup — a two-month bootcamp combining forums, mentoring, company visits, case competitions, and a real client project.",
    content: `SxCelerate is where theory meets practice at full speed. Over two months, selected university students go through a structured program designed to compress years of professional development into an intensive, high-accountability experience.

The program is built around five core components. Forums bring participants together for structured learning sessions on leadership, strategy, and professional skills — facilitated by industry practitioners and SxC Jakarta alumni. Mentoring pairs each participant with a professional mentor who provides personalized guidance throughout the program.

Company visits take participants inside the operations of leading Indonesian companies, offering a behind-the-scenes perspective that goes far beyond what any classroom or webinar can provide. Case competitions challenge teams to solve real business problems under time pressure, developing analytical thinking, communication, and collaboration skills simultaneously.

The capstone of SxCelerate is the Client Project — a live consulting engagement with a real company partner. Teams work directly with the client to diagnose a business challenge and develop actionable recommendations, presenting their findings to senior leadership at the end of the program.

Participants who complete SxCelerate consistently describe it as a transformative experience. The combination of depth, intensity, and real-world application creates a level of growth that is difficult to replicate anywhere else.`,
    highlights: [
      "Structured forums with industry practitioners",
      "1-on-1 mentoring with professionals",
      "Company visits to leading Indonesian firms",
      "Live case competition",
      "Real client consulting project",
    ],
  },
  {
    slug: "meet-the-series",
    badge: "Meet the Series",
    category: "OFFLINE EVENT SERIES",
    title: "Big Offline Event Series",
    month: "July",
    audience: "All Future Leaders",
    cover: "/programs/meet-the-series/cover.jpg",
    images: [
      "/programs/meet-the-series/gallery-1.jpg",
      "/programs/meet-the-series/gallery-2.jpg",
      "/programs/meet-the-series/gallery-3.jpg",
    ],
    excerpt:
      "Three flagship offline events in one series — Meet The CEO, Meet The Expert, and Meet Yourself — each designed to give you a different lens on leadership, career, and self.",
    content: `The Meet the Series is StudentsxCEOs Jakarta's largest offline event series of the year, bringing together hundreds of students, young professionals, and industry leaders across three distinct events — each with its own focus, format, and energy.

Meet The CEO is an intimate conversation series with some of Indonesia's most influential business leaders. Unlike conventional keynote formats, Meet The CEO is designed for dialogue — small group settings, honest Q&A, and the kind of access that is rarely available to students outside of programs like this.

Meet The Expert zooms in on specific professional skills and industry knowledge, featuring domain experts who go deep rather than broad. Past sessions have covered topics from venture capital and brand strategy to organizational psychology and supply chain innovation.

Meet Yourself is the most introspective event in the series — a guided experience focused on self-awareness, values clarification, and personal leadership identity. Facilitated by coaches and psychologists, it gives participants tools to understand themselves more deeply and lead from a place of authenticity.

Together, the three events create a complete leadership development experience that addresses the external world of business, the specific skills of professional practice, and the internal foundations of who you are as a leader.`,
    highlights: [
      "Meet The CEO: intimate dialogue with top executives",
      "Meet The Expert: deep-dive skills & industry sessions",
      "Meet Yourself: self-awareness & leadership identity",
      "Open to all students and young professionals",
      "Largest offline event series in the SxC calendar",
    ],
  },
  {
    slug: "sxconference",
    badge: "SxConference",
    category: "ANNUAL CONFERENCE",
    title: "Dynamic Leadership Conference",
    month: "August",
    audience: "Alumni, External, Internal SxC Jakarta",
    cover: "/programs/sxconference/cover.jpg",
    images: [
      "/programs/sxconference/gallery-1.jpg",
      "/programs/sxconference/gallery-2.jpg",
      "/programs/sxconference/gallery-3.jpg",
    ],
    excerpt:
      "The annual flagship conference that unites the full StudentsxCEOs Jakarta community — alumni, young professionals, and industry leaders — for a day of insightful talk shows and bold discussions on the future of leadership.",
    content: `SxConference is the culminating event of the StudentsxCEOs Jakarta annual calendar — a full-day conference that brings together the entire SxC community alongside external guests for the most ambitious, wide-ranging conversation of the year.

The conference is structured around a central theme that shifts each year, reflecting the most pressing questions in leadership, industry, and society. Past themes have explored topics including leadership in uncertainty, the future of work, and the role of young Indonesians in shaping the nation's next chapter.

The main stage features a series of talk show panels — fast-paced, substantive, and deliberately diverse in perspective. Panelists include SxC Jakarta alumni who have gone on to build companies and lead organizations, alongside external executives and thought leaders who bring an outside view.

Breakout discussions give attendees the chance to go deeper on specific topics in smaller groups, facilitated by practitioners who can turn big ideas into practical frameworks.

SxConference is also a reunion — a chance for alumni across cohorts to reconnect, for current members to see where the community leads, and for new participants to understand the full depth and ambition of what StudentsxCEOs Jakarta is building. It is, in many ways, the best expression of what the organization stands for.`,
    highlights: [
      "Annual central theme driving all sessions",
      "Main stage talk shows with alumni & industry leaders",
      "Facilitated breakout discussions",
      "Full SxC community reunion",
      "Open to alumni, external guests & internal members",
    ],
  },
];