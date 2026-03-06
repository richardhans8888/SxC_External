import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RESOURCES } from "@/data/resources-data";
import { VALUES_DATA } from "@/data/values-data";

export const metadata: Metadata = {
  title: "Resources | StudentsxCEOs Jakarta",
  description: "Explore our insights, leadership toolkit, and career resources.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-neutral-900">
         {/* Actual Image */}
         <img 
            src="/resources/Partnership.jpg" 
            alt="Resources Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-60" 
         />
         
         {/* Gradient Overlay (Kept for text readability) */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
         
      </div>

      {/* Headline Overlay */}
      <div className="absolute top-1/3 left-0 w-full px-6 sm:px-12 max-w-[1400px] mx-auto z-10">
         <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif text-white max-w-4xl leading-tight">
            Capturing<br />Leadership<br />Insights
         </h1>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-16 sm:bottom-24 left-0 w-full z-10">
         <div className="px-6 sm:px-12 max-w-[1400px] mx-auto">
            <div className="bg-blue-900/90 backdrop-blur-md p-8 sm:p-12 max-w-3xl border-l-4 border-white">
               <p className="text-xl sm:text-2xl text-white font-light leading-relaxed">
                  Our thinking reveals possibilities unimagined by others. Together, we move swiftly to empower the next generation of leaders.
               </p>
            </div>
         </div>
      </div>
      </section>


      {/* 2. APPROACH SECTION */}
      {/* Inspired by Image 2: "Our Approach" + Two-column layout */}
      <section className="py-24 px-6 sm:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Top Block: Label + Statement */}
          <div className="lg:col-span-12 flex flex-col sm:flex-row gap-8 sm:gap-16 border-b border-black/10 pb-20 mb-20">
             <div className="sm:w-1/4 pt-2">
                <span className="text-sm font-bold tracking-widest uppercase text-zinc-400">OUR APPROACH</span>
             </div>
             <div className="sm:w-3/4 pl-0 sm:pl-8 border-l-0 sm:border-l border-black/10">
                <h2 className="text-4xl sm:text-5xl font-serif text-blue-900 leading-tight">
                  Drive knowledge to the world's most impactful and compelling minds, leveraging our combination of talent, network, and global scale.
                </h2>
             </div>
          </div>

          {/* Bottom Block: Ideas in Action */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
             <div>
                <h2 className="text-5xl sm:text-6xl font-serif text-blue-900 leading-none">
                  Only at SxC:<br />
                  <span className="text-blue-600">Ideas in Action</span>
                </h2>
             </div>
             <div>
                <p className="text-xl text-zinc-600 leading-relaxed">
                   We will explore any territory in pursuit of an idea, taking unconventional approaches and making big, bold investments in unexpected places. Our resources are designed to be actionable, practical, and transformative for your career journey.
                </p>
             </div>
          </div>
        </div>
      </section>


      {/* 3. FEATURE SECTION (Weather Prediction Style) */}
      {/* Inspired by Image 3: Left Image, Right Text */}
      <section className="py-24 px-6 sm:px-12 max-w-[1400px] mx-auto border-t border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           {/* Left Image */}
           <div className="aspect-[16/10] bg-neutral-100 relative overflow-hidden">
              <img 
                  src="resources/leadership.jpeg" 
                  alt="Feature Description"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />
              
           </div>

           {/* Right Content */}
           <div>
              <h2 className="text-4xl sm:text-5xl font-serif text-blue-900 mb-8 leading-tight">
                 Taking Leadership Development to a New Level
              </h2>
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                 <p>
                    From student organizations to multinational corporations, changes in leadership dynamics play a key role in determining success. We asked: What if we could forecast those changes better than anyone else?
                 </p>
                 <p>
                    Our Research strategy has assembled a team of analysts who understand and can predict signals generated from market trends. Working in tandem with industry experts, they've built a differentiated applied research operation.
                 </p>
                 <p>
                    Today, they help transform data into actionable insights, communicating career-driven commercial opportunities and risks to our community.
                 </p>
              </div>
           </div>
        </div>
      </section>


      {/* 4. STRATEGIES GRID */}
      {/* Inspired by Image 4: "Five Strategies. One Commitment." */}
      <section className="py-24 bg-neutral-50 px-6 sm:px-12">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
               <h2 className="text-5xl sm:text-6xl font-serif text-blue-900 leading-tight">
                  Four Pillars.<br />One Commitment.
               </h2>
               <p className="text-zinc-500 max-w-md text-lg text-right lg:text-left">
                  Across all major industries and functions, we have a singular focus: delivering industry-leading resources.
               </p>
            </div>

            {/* Values cards from values-data.ts — 2 cols on md, 4 on xl */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 border-t border-black/10 pt-12 mb-20">
              {VALUES_DATA.map((value, i) => (
                <div
                  key={value.index}
                  className={`group flex flex-col h-full ${i > 0 ? "border-l-0 md:border-l border-black/10 pl-0 md:pl-8" : ""}`}
                >
                  {/* Image */}
                  <div className="aspect-[16/9] bg-neutral-100 mb-6 overflow-hidden relative border border-black/5">
                    <Image
                      src={value.imageSrc}
                      alt={value.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Index badge */}
                    <div className="absolute top-3 left-3 h-7 w-7 rounded-full bg-white/90 flex items-center justify-center text-xs font-bold text-blue-900 shadow-sm z-10">
                      {value.index}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif text-blue-900 mb-3 leading-snug">
                    {value.title.map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < value.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-600 leading-relaxed text-sm flex-1">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Resource cards — Blog, Toolkit, Career */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/10 pt-12">
               {/* Card 1 */}
               <Link href="/resources/blog-insights" className="contents">
                  <div className="group cursor-pointer flex flex-col h-full">
                     <div className="aspect-[16/9] bg-white mb-6 overflow-hidden relative border border-black/5">
                        <div className="absolute inset-0 bg-neutral-200 transition-transform duration-500 group-hover:scale-105" />
                     </div>
                     <h3 className="text-2xl font-serif text-blue-900 mb-3">Blog / Insights</h3>
                     <p className="text-zinc-600 mb-4 leading-relaxed">
                        Deep dives into current industry trends, interview tips, and success stories from our alumni network.
                     </p>
                     <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                        Explore Insights <span>→</span>
                     </span>
                  </div>
               </Link>

               {/* Card 2 */}
               <Link href="/resources/leadership-toolkit" className="contents">
                  <div className="group cursor-pointer border-l-0 md:border-l border-black/10 pl-0 md:pl-8 flex flex-col h-full">
                     <div className="aspect-[16/9] bg-white mb-6 overflow-hidden relative border border-black/5">
                        <div className="absolute inset-0 bg-neutral-200 transition-transform duration-500 group-hover:scale-105" />
                     </div>
                     <h3 className="text-2xl font-serif text-blue-900 mb-3">Leadership Toolkit</h3>
                     <p className="text-zinc-600 mb-4 leading-relaxed">
                        Practical templates, frameworks, and guides to help you lead teams and manage projects effectively.
                     </p>
                     <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                        Access Toolkit <span>→</span>
                     </span>
                  </div>
               </Link>

               {/* Card 3 */}
               <Link href="/resources/career-resources" className="contents">
                  <div className="group cursor-pointer border-l-0 md:border-l border-black/10 pl-0 md:pl-8 flex flex-col h-full">
                     <div className="aspect-[16/9] bg-white mb-6 overflow-hidden relative border border-black/5">
                        <div className="absolute inset-0 bg-neutral-200 transition-transform duration-500 group-hover:scale-105" />
                     </div>
                     <h3 className="text-2xl font-serif text-blue-900 mb-3">Career Resources</h3>
                     <p className="text-zinc-600 mb-4 leading-relaxed">
                        Curated job boards, resume reviews, and mock interview sessions with our partner companies.
                     </p>
                     <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                        View Resources <span>→</span>
                     </span>
                  </div>
               </Link>
            </div>
         </div>
      </section>


      {/* 5. COMPETITIVE ADVANTAGE (Dark Section) */}
      {/* Inspired by Image 5: Dark blue background with 3 columns */}
      <section className="bg-[#0A1628] text-white py-24 px-6 sm:px-12">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
               <div className="lg:col-span-5">
                  <div className="aspect-[16/9] bg-blue-900/50 relative overflow-hidden">
                     {/* Image placeholder */}
                     <img 
                        src="/resources/Friendship.jpeg" 
                        alt="Competitive Advantage"
                        className="absolute inset-0 w-full h-full object-cover"
                     />
                  </div>
               </div>
               <div className="lg:col-span-7 flex items-center">
                  <h2 className="text-5xl sm:text-6xl font-serif leading-tight">
                     Our Competitive<br />Advantage
                  </h2>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-t border-white/20 pt-16">
               {/* Col 1 */}
               <div>
                  <h3 className="text-2xl font-serif mb-6 text-white">Extraordinary People</h3>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                     <p>Talent from across universities, majors, and backgrounds gather here.</p>
                     <p>Our community is a place for extraordinary growth. Our members benefit from our unparalleled resources and learn from the talent assembled around them.</p>
                  </div>
               </div>

               {/* Col 2 */}
               <div className="border-l-0 md:border-l border-white/20 pl-0 md:pl-12">
                  <h3 className="text-2xl font-serif mb-6 text-white">Superior Mentorship</h3>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                     <p>Mentorship is the lifeblood of our organization. Our ambitious thinking frequently requires guidance that isn't found in textbooks.</p>
                     <p>Our network of CEOs and industry leaders drive us forward with proprietary insights and real-world experience.</p>
                  </div>
               </div>

               {/* Col 3 */}
               <div className="border-l-0 md:border-l border-white/20 pl-0 md:pl-12">
                  <h3 className="text-2xl font-serif mb-6 text-white">Disciplined Growth</h3>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                     <p>We are specialists in the career paths we cover, enabling more productive dialogue with professionals.</p>
                     <p>From our internal development programs, our members experience constant growth, review, and improvement.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}