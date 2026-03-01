// ValueCard.tsx — Reusable "template" component (OOP-style)
// Think of this as a "class" with defined properties (props interface = schema)
// Each card is an "instance" created with different data

import Image from "next/image";

// --- TYPE DEFINITION (like a class schema / interface) ---
export interface ValueCardProps {
  index: number;           // Display number (e.g. 01, 02...)
  title: string[];         // Title split into lines, e.g. ["Individual", "and Team"]
  description: string;
  imageSrc: string;        // Path to image
  imageAlt: string;
  accent?: string;         // Optional accent color class (default: blue-600)
}

// --- COMPONENT (the "class" / template) ---
export function ValueCard({
  index,
  title,
  description,
  imageSrc,
  imageAlt,
  accent = "bg-blue-600",
}: ValueCardProps) {
  const indexStr = String(index).padStart(2, "0");

  return (
    <article className="group flex flex-col gap-0 overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-500 bg-white">
      {/* Image Block */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Index Badge */}
        <div className={`absolute top-4 left-4 ${accent} text-white text-xs font-bold px-2 py-1 tracking-widest`}>
          {indexStr}
        </div>
      </div>

      {/* Text Block */}
      <div className="p-8 flex flex-col gap-4 flex-1">
        <h3 className="text-2xl font-bold uppercase leading-tight tracking-tight text-zinc-900">
          {title.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h3>
        <div className={`h-[2px] w-8 ${accent} rounded-full`} />
        <p className="text-zinc-500 leading-relaxed text-sm sm:text-base flex-1">
          {description}
        </p>
      </div>
    </article>
  );
}