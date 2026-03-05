// people-data.ts — Centralized data for Our People page
// OOP pattern: add/remove people here only. No JSX changes needed.
import { StaticImageData } from "next/image";
import { PersonCardProps, BoardMemberProps } from "@/components/PersonCard";

// ── Image imports ──────────────────────────────────────────────
// Import your actual images here, e.g:
// import johnDoeImg from "@/images/people/john-doe.jpg";
// Then replace the placeholder strings below with the imported variable.

// ── Board of Executive ─────────────────────────────────────────
export const EXECUTIVES: PersonCardProps[] = [
  {
    name: "Name Surname",
    role: "President",
    imageSrc: "/images/people/exec-1.jpg",
    variant: "executive",
  },
  {
    name: "Name Surname",
    role: "Vice President",
    imageSrc: "/images/people/exec-2.jpg",
    variant: "executive",
  },
  {
    name: "Name Surname",
    role: "Secretary General",
    imageSrc: "/images/people/exec-3.jpg",
    variant: "executive",
  },
  {
    name: "Name Surname",
    role: "Treasurer",
    imageSrc: "/images/people/exec-4.jpg",
    variant: "executive",
  },
];

// ── Board of Management ────────────────────────────────────────
export const MANAGEMENT: PersonCardProps[] = [
  {
    name: "Name Surname",
    role: "Global Head of Marketing",
    imageSrc: "/images/people/mgmt-1.jpg",
    variant: "management",
  },
  {
    name: "Name Surname",
    role: "Global Head of Events",
    imageSrc: "/images/people/mgmt-2.jpg",
    variant: "management",
  },
  {
    name: "Name Surname",
    role: "Global Head of Partnerships",
    imageSrc: "/images/people/mgmt-3.jpg",
    variant: "management",
  },
  {
    name: "Name Surname",
    role: "Global Head of Technology",
    imageSrc: "/images/people/mgmt-4.jpg",
    variant: "management",
  },
  {
    name: "Name Surname",
    role: "Global Head of Content",
    imageSrc: "/images/people/mgmt-5.jpg",
    variant: "management",
  },
  {
    name: "Name Surname",
    role: "Global Head of Community",
    imageSrc: "/images/people/mgmt-6.jpg",
    variant: "management",
  },
  {
    name: "Name Surname",
    role: "Global Head of Finance",
    imageSrc: "/images/people/mgmt-7.jpg",
    variant: "management",
  },
  {
    name: "Name Surname",
    role: "Global Head of Operations",
    imageSrc: "/images/people/mgmt-8.jpg",
    variant: "management",
  },
];

// ── Board Members (text only) ──────────────────────────────────
export const BOARD_MEMBERS: BoardMemberProps[] = [
  { name: "Board Member Name", title: "Chairman & CEO", company: "Company Name" },
  { name: "Board Member Name", title: "Managing Director", company: "Company Name" },
  { name: "Board Member Name", title: "Founder & CEO", company: "Company Name" },
  { name: "Board Member Name", title: "Chief Strategy Officer", company: "Company Name" },
  { name: "Board Member Name", title: "Partner", company: "Company Name" },
  { name: "Board Member Name", title: "Director", company: "Company Name" },
  { name: "Board Member Name", title: "Co-Founder", company: "Company Name" },
  { name: "Board Member Name", title: "President Director", company: "Company Name" },
];