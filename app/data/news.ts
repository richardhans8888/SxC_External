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
    slug: "holiday-shopping-2025",
    category: "RESEARCH REPORT",
    title: "Holiday Shopping 2025",
    date: "April 1, 2025",
    author: "StudentsxCEOs Jakarta",
    cover: "/news/holiday-shopping-2025/cover.jpg",
    images: [
      "/news/holiday-shopping-2025/gallery-1.jpg",
      "/news/holiday-shopping-2025/gallery-2.jpg",
      "/news/holiday-shopping-2025/gallery-3.jpg",
    ],
    excerpt:
      "A deep dive into shifting consumer behaviors and emerging retail trends defining the 2025 holiday season.",
    content: `The 2025 holiday shopping season marks a pivotal shift in how consumers across Southeast Asia approach gift-giving, spending, and brand loyalty. Driven by the rise of social commerce and hyper-personalized recommendations, shoppers are making decisions faster — and with higher expectations than ever before.

Our research team surveyed over 3,000 respondents across Jakarta, Surabaya, and Bandung to understand how young professionals and students are reshaping retail. The findings reveal a generation that values experience over product, community over brand, and purpose over price.

Key findings from this report include a 42% increase in last-minute digital purchases, a growing preference for local brands among Gen Z consumers, and a significant shift toward sustainable packaging as a purchase driver. Retailers who adapt their messaging to these values are seeing up to 3x higher engagement rates during peak season.

This report was compiled in partnership with leading FMCG and retail partners of StudentsxCEOs Jakarta, and reflects the lived experiences of the students and young professionals in our community.`,
  },
  {
    slug: "growth-in-the-age-of-ai",
    category: "RESEARCH REPORT",
    title: "Growth in the Age of AI",
    date: "April 15, 2025",
    author: "StudentsxCEOs Jakarta",
    cover: "/news/growth-in-the-age-of-ai/cover.jpg",
    images: [
      "/news/growth-in-the-age-of-ai/gallery-1.jpg",
      "/news/growth-in-the-age-of-ai/gallery-2.jpg",
    ],
    excerpt:
      "How artificial intelligence is redefining career paths, company structures, and what it means to lead in 2025.",
    content: `Artificial intelligence is no longer a distant future — it is the operating environment that today's university students will graduate into. This report explores how AI is fundamentally restructuring industries, redefining leadership competencies, and creating entirely new career trajectories that did not exist five years ago.

Through interviews with 20 CEOs and industry leaders across technology, consulting, and FMCG sectors, we identified a consistent theme: the leaders who thrive in the age of AI are not those who master the tools, but those who master the questions. Critical thinking, cross-disciplinary communication, and ethical judgment are emerging as the most valued skills in AI-augmented workplaces.

For students, the implication is clear. Technical literacy matters, but it is the human skills — empathy, creativity, contextual reasoning — that will differentiate the next generation of leaders. StudentsxCEOs Jakarta's programs are designed precisely to cultivate these capacities.`,
  },
  {
    slug: "destination-net-zero-2025",
    category: "RESEARCH REPORT",
    title: "Destination Net Zero 2025",
    date: "May 5, 2025",
    author: "StudentsxCEOs Jakarta",
    cover: "/news/destination-net-zero-2025/cover.jpg",
    images: [
      "/news/destination-net-zero-2025/gallery-1.jpg",
    ],
    excerpt:
      "Tracking Indonesia's corporate sustainability commitments and the role young leaders play in accelerating the green transition.",
    content: `Indonesia's path to net zero emissions by 2060 runs directly through the decisions made by today's business leaders and the generation preparing to join them. This report examines the current state of corporate sustainability commitments across Indonesian industries, with a focus on what is working, what is stalling, and where the greatest opportunities for impact lie.

Young professionals are increasingly the driving force behind internal ESG initiatives at major corporations. Our research found that companies with strong youth leadership pipelines are 60% more likely to have a published net-zero roadmap, and 45% more likely to have achieved meaningful emissions reductions in the past two years.

StudentsxCEOs Jakarta is committed to equipping the next generation with the frameworks, networks, and courage to accelerate Indonesia's green transition — from the boardroom to the supply chain.`,
  },
  {
    slug: "accelerating-human-ai-collaboration",
    category: "RESEARCH REPORT",
    title: "Accelerating Human‑AI Collaboration",
    date: "May 20, 2025",
    author: "StudentsxCEOs Jakarta",
    cover: "/news/accelerating-human-ai-collaboration/cover.jpg",
    images: [],
    excerpt:
      "Practical frameworks for building teams where humans and AI systems complement each other's strengths.",
    content: `The question is no longer whether AI will be part of the workforce — it already is. The question is how organizations design the collaboration between human judgment and machine capability to produce outcomes neither could achieve alone.

This report presents five frameworks drawn from real implementations at Indonesian companies across banking, media, and logistics. Each framework addresses a different dimension of human-AI collaboration: task allocation, decision accountability, creative partnership, feedback loops, and organizational culture.

The organizations that are getting this right share one characteristic: they treat AI integration as a leadership challenge, not a technology challenge. The most successful implementations are led by executives who understand both the capabilities and the limitations of AI systems — and who build teams with the psychological safety to push back when the machine gets it wrong.`,
  },
  {
    slug: "ai-and-your-operating-model",
    category: "RESEARCH REPORT",
    title: "AI and Your Operating Model",
    date: "June 1, 2025",
    author: "StudentsxCEOs Jakarta",
    cover: "/news/ai-and-your-operating-model/cover.jpg",
    images: [],
    excerpt:
      "Why AI adoption fails without operating model redesign — and how to build the structure that makes transformation stick.",
    content: `Most AI transformations fail not because of the technology, but because of the operating model surrounding it. This report analyzes 30 AI implementation projects across Southeast Asian enterprises and identifies the structural, cultural, and governance factors that determine whether AI creates lasting value or becomes an expensive experiment.

The findings are consistent: organizations that redesign their operating model in parallel with their AI adoption are three times more likely to achieve their stated goals. This means rethinking decision rights, data ownership, team structures, and incentive systems — not just deploying new tools.

For the next generation of leaders, understanding operating model design is as important as understanding the AI systems themselves. StudentsxCEOs Jakarta's SxCelerate bootcamp now includes a dedicated module on AI-ready organizational design.`,
  },
  {
    slug: "sovereign-ai-managing-risk-to-growth",
    category: "RESEARCH REPORT",
    title: "Sovereign AI: Managing Risk to Growth",
    date: "June 15, 2025",
    author: "StudentsxCEOs Jakarta",
    cover: "/news/sovereign-ai-managing-risk-to-growth/cover.jpg",
    images: [],
    excerpt:
      "Navigating the geopolitical, regulatory, and strategic dimensions of AI sovereignty for Indonesian businesses.",
    content: `As nations race to establish AI sovereignty — the ability to develop, govern, and deploy AI systems independently — Indonesian businesses face a complex strategic landscape. This report examines what AI sovereignty means in practice for companies operating in Indonesia, and what risks and opportunities it creates.

The regulatory environment is evolving rapidly. Indonesia's draft AI governance framework, expected to be finalized in late 2025, will impose new requirements on data localization, algorithmic transparency, and high-risk AI applications. Companies that engage proactively with this process will be better positioned to shape — and comply with — the eventual rules.

For young leaders entering the workforce, AI governance is not a compliance function. It is a strategic capability that will define competitive advantage in the decade ahead.`,
  },
  {
    slug: "strengthen-your-cyber-defenses",
    category: "RESEARCH REPORT",
    title: "Strengthen Your Cyber Defenses",
    date: "July 1, 2025",
    author: "StudentsxCEOs Jakarta",
    cover: "/news/strengthen-your-cyber-defenses/cover.jpg",
    images: [],
    excerpt:
      "A practical guide to building organizational cyber resilience in an era of increasingly sophisticated threats.",
    content: `Cybersecurity is no longer solely a technical domain — it is a leadership responsibility. As threats grow more sophisticated and the consequences of breaches more severe, the organizations best positioned to defend themselves are those whose leaders understand cyber risk at a strategic level.

This report provides a practical framework for Indonesian business leaders to assess and strengthen their organization's cyber posture. Drawing on case studies from financial services, healthcare, and technology sectors, we identify the five most common failure points in organizational cyber defense — and the leadership interventions that address each one.

The most important finding: culture is the most powerful cybersecurity tool available. Organizations where employees feel safe reporting suspicious activity, where security is seen as everyone's responsibility, and where leadership models good digital hygiene are significantly more resilient than those relying on technology alone.`,
  },
  {
    slug: "reimagining-public-services",
    category: "RESEARCH REPORT",
    title: "Reimagining Public Services",
    date: "July 15, 2025",
    author: "StudentsxCEOs Jakarta",
    cover: "/news/reimagining-public-services/cover.jpg",
    images: [],
    excerpt:
      "How public-private collaboration and youth leadership are transforming service delivery across Indonesian cities.",
    content: `Indonesia's public services are at an inflection point. The combination of digital infrastructure investment, a young and tech-savvy population, and a generation of leaders willing to challenge institutional inertia is creating genuine opportunities to reimagine how government services are designed and delivered.

This report examines five case studies of successful public service innovation in Indonesian cities, identifying the leadership conditions, partnership models, and design principles that made transformation possible. In each case, young leaders — many of them alumni of programs like StudentsxCEOs Jakarta — played a critical role in bridging the gap between public sector institutions and private sector capabilities.

The opportunity ahead is significant. But capturing it requires a new kind of leader: one who understands both the complexity of public institutions and the tools of modern service design.`,
  },
];