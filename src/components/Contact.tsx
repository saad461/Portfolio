import { Mail, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="text-primary" size={32} />,
      title: "Email",
      value: "saadnadeem157@gmail.com",
      href: "mailto:saadnadeem157@gmail.com"
    },
    {
      icon: <Github className="text-secondary" size={32} />,
      title: "GitHub",
      value: "github.com/saad461",
      href: "https://github.com/saad461"
    },
    {
      icon: <Linkedin className="text-primary" size={32} />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com"
    },
    {
      icon: <Phone className="text-secondary" size={32} />,
      title: "Phone",
      value: "03406672221",
      href: "tel:03406672221"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Available for freelance projects, internships and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, idx) => (
            <Link
              key={idx}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              className="reveal flex items-center p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary/50 hover:bg-slate-800/80 transition-all group"
            >
              <div className="mr-6 transform group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold text-lg">{method.title}</h3>
                <p className="text-slate-400">{method.value}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
