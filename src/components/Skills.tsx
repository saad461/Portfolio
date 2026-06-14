const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
      skills: [
        "Next.js", "React.js", "JavaScript ES6+",
        "HTML5", "CSS3", "Tailwind CSS", "PHP"
      ]
    },
    {
      title: "Backend and Database",
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
      skills: ["Supabase", "REST APIs", "MySQL"]
    },
    {
      title: "AI and GenAI",
      color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
      skills: [
        "OpenAI API", "Claude API",
        "Prompt Engineering", "LangChain (learning)"
      ]
    },
    {
      title: "Tools and Deployment",
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      skills: [
        "GitHub", "Git", "Vercel", "VS Code",
        "Google Search Console", "Cloudflare",
        "Domain Management", "SEO Basics"
      ]
    },
    {
      title: "Currently Learning",
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      skills: ["Python", "TypeScript", "LangChain", "Generative AI Development"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          Skills & <span className="text-secondary">Technologies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="reveal p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold mb-6 text-slate-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border ${category.color} hover:scale-105 transition-transform`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
