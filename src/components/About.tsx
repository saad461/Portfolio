const About = () => {
  const stats = [
    { label: "Live Projects", value: "5+" },
    { label: "Real Clients", value: "2+" },
    { label: "AI Integrations", value: "3+" },
  ];

  return (
    <section id="about" className="py-16 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 reveal">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="text-slate-300 text-lg leading-relaxed mb-12 reveal">
            <p className="mb-6">
              Self-driven web developer and IT graduate from
              Institute of Southern Punjab with hands-on
              experience building and deploying production-level
              web applications. Specialized in Next.js full stack
              development and AI API integration using OpenAI
              and Claude APIs.
            </p>
            <p className="mb-6">
              Built multiple live web tools
              including legal calculators, educational portals
              and AI-powered applications — all deployed on
              Vercel with real users. Currently expanding into
              Generative AI development with Python, LangChain
              and advanced prompt engineering. Also experienced
              in PHP based web development with real client
              project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="reveal p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary/50 transition-all text-center group"
              >
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
