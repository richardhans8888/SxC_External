// values-data.ts — Centralized data store for Values cards
// Think of this as a "factory" that produces ValueCard instances
// To add a new value: just add one object to this array. No JSX changes needed.

import { ValueCardProps } from "@/components/ValueCard";

// Each object = one "instance" of a ValueCard
export const VALUES_DATA: ValueCardProps[] = [
  {
    index: 1,
    title: ["Individual", "and Team"],
    description:
      "Our talented individuals are our greatest resource. However, they can only pursue the extraordinary by working together as a team. By fostering integrity, excellence and generosity, we give each of our people the possibility to express their own full potential – and be part of something greater.",
    imageSrc: "/images/values/individual-team.jpg",
    imageAlt: "Team collaboration at StudentsxCEOs Jakarta",
  },
  {
    index: 2,
    title: ["Tradition and", "Innovation"],
    description:
      "Tradition and innovation drive each other. The ongoing quest for lasting firsts is what fuels the SxC legend. Our ability to combine revolutionary ideas with exceptional execution is what enables us to create experiences that stay timeless in a fast-changing world.",
    imageSrc: "/images/values/tradition-innovation.jpg",
    imageAlt: "Innovation and tradition at StudentsxCEOs",
  },
  {
    index: 3,
    title: ["Passion and", "Achievement"],
    description:
      "SxC's spirit lives on in emotions that transcend the classroom and the boardroom, ultimately becoming an authentic attitude towards life. Nothing excites us more than setting ambitious targets and expectations – and then exceeding them, to push every boundary.",
    imageSrc: "/images/values/passion-achievement.jpg",
    imageAlt: "Passion and achievement - SxC community",
  },
  {
    index: 4,
    title: ["Impact and", "Legacy"],
    description:
      "Every connection made, every insight shared, every barrier broken – these are the building blocks of lasting impact. We believe that the leaders of tomorrow are shaped by the conversations they have today, and we are committed to making those conversations count.",
    imageSrc: "/images/values/impact-legacy.jpg",
    imageAlt: "Impact and legacy - SxC Jakarta community",
  },
];