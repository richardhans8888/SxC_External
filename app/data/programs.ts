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
    month: "April 24, 2025",
    audience: "High School Students",
    cover: "/programs/school-of-ideas/cover.jpg",
    images: [
      "/programs/school-of-ideas/gallery-1.jpg",
      "/programs/school-of-ideas/gallery-2.jpg",
      "/programs/school-of-ideas/gallery-3.jpg",
    ],
    excerpt:
      "Offline event for high school students to explore their potential through personality tests and grow into future leaders with engaging talk shows and workshops.",
    content: `School of Ideas 2025 brought together high school students across Jakarta for a day of discovery, inspiration, and skill-building under the theme "Career Quest: Unlock Your Future." Held on Thursday, April 24th, 2025 at SMA Labschool Cibubur, the event ran from 16.00 to 18.00 WIB.

The centerpiece of the event was a talkshow titled "The Rise of AI: How Artificial Intelligence Will Shape Your Future" — a timely and eye-opening discussion designed to help students understand how AI is already reshaping careers and what they can do to stay ahead.

The event featured three outstanding speakers. Navira Putri Apriliani, Partnership and Strategy Lead at Eduquip Education, Management Consultant at a Consulting Firm, and Best Undergraduate Student of FEB UI 2023. Ahmad Dipa, Education Content Creator on TikTok with 34K+ followers, Former President of ISAFIS 2024, and Top 10 Finalist at the prestigious Bank Indonesia Digital Content Competition 2024. Falah Andhesryo, Top Student of Ruangguru Clash of Champions 2024 and Gold Medalist at both Olimpiade Sains Indonesia HARDIKNAS Bidang Informatika 2022 and Olimpiade Sains Nasional Global Youth Action Bidang Ilmu Komputer 2021.

Participants gained real insider knowledge straight from the pros, access to exclusive BPC/BCC coaching sessions, and the chance to compete for a total prize pool of IDR 50 million. The event also provided elite networking access — connecting students with peers, mentors, and professionals who share the same drive to grow.

School of Ideas 2025 has officially concluded. We thank every student who attended, every speaker who shared their story, and our partners Eduquip and Cakak for making it possible. Stay connected with StudentsxCEOs Jakarta for future editions and upcoming programs.`,

highlights: [
  "Gained real insider hacks straight from the pros",
  "Exclusive BPC/BCC coaching session",
  "Total prize pool of IDR 50 million",
  "Elite networking access",
  "Leveled up confidence, skills, and mindset",
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