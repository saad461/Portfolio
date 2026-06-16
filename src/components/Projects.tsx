import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "MedPOS — Pharmacy Management SaaS",
      description: "Cloud based Point of Sale and inventory management platform for Pakistani pharmacies. Features 3000+ DRAP medicine database, multi-tenant architecture with Row Level Security, automated expiry alerts, VAT compliant PDF invoice generation.",
      tech: ["Next.js 14", "TypeScript", "Supabase", "Zustand", "TanStack Query", "Stripe", "Safepay", "shadcn/ui", "Zod", "Sentry"],
      liveLink: null,
      badge: "SaaS Product",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      status: "Coming Soon",
      isFeatured: true
    },
    {
      title: "AI Student Portal",
      description: "Full stack educational management system featuring complete admin panel, student dashboard, role based authentication and AI integration. Built for real educational use with production grade architecture.",
      tech: ["Next.js", "Supabase", "OpenAI API", "JavaScript", "Vercel"],
      liveLink: "https://student-website-pearl.vercel.app/",
      githubLink: "https://github.com/saad461",
      badge: "AI Powered",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    {
      title: "Washington Child Support Calculator",
      description: "Legal calculator tool targeting US audience helping families calculate child support payments. Indexed on Google Search Console with growing organic impressions.",
      tech: ["Next.js", "JavaScript", "Vercel", "SEO"],
      liveLink: "https://wscss.site",
      badge: "Live Traffic",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
    },
    {
      title: "Laser Cutting Cost Calculator",
      description: "Specialized calculator tool for laser cutting businesses to estimate project costs. Approved for Google AdSense monetization.",
      tech: ["Next.js", "JavaScript", "Vercel"],
      liveLink: "https://laser-rho.vercel.app/",
      badge: "AdSense Approved",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30"
    },
    {
      title: "Aale Imran Welfare Organization",
      description: "Complete nonprofit organization website built for a real welfare organization. Features donation information, programs showcase and contact management. Built with PHP backend.",
      tech: ["PHP", "HTML", "CSS", "JavaScript"],
      liveLink: "https://aaleimranwelfare.org",
      badge: "Real Client",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      title: "Zabiha Chicken",
      description: "Full restaurant website built for a US based restaurant client over 5 months of collaboration. Features complete menu, locations and online presence management.",
      tech: ["PHP", "HTML", "CSS", "JavaScript"],
      liveLink: null,
      badge: "US Client",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      status: "Coming Soon"
    },
    {
      title: "Belgium Severance Pay Calculator",
      description: "Financial calculator tool targeting European audience helping HR professionals calculate severance pay using the Claeys formula.",
      tech: ["Next.js", "JavaScript", "Vercel", "SEO"],
      liveLink: null,
      badge: "In Development",
      badgeColor: "bg-slate-500/20 text-slate-400 border-slate-500/30",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 reveal">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`reveal group relative p-8 rounded-3xl bg-slate-800 border border-slate-700 hover:border-transparent transition-all duration-300 ${
                project.isFeatured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity -z-10">
                <div className="w-full h-full bg-slate-800 rounded-[23px]"></div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-md bg-slate-900 text-slate-300 text-xs border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.status === "Coming Soon" ? (
                  <button
                    disabled
                    className="flex items-center px-5 py-2 bg-slate-700 text-slate-400 rounded-lg text-sm font-medium cursor-not-allowed"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Coming Soon
                  </button>
                ) : (
                  <Link
                    href={project.liveLink || "#"}
                    target="_blank"
                    className="flex items-center px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Link>
                )}

                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center px-5 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Source
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
