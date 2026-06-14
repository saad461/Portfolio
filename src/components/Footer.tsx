const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl font-bold text-primary mb-2">Saad Nadeem</p>
        <p className="text-slate-400 mb-4">Web Developer and AI Specialist</p>
        <p className="text-slate-500 text-sm">
          Built with Next.js and deployed on Vercel
        </p>
        <p className="text-slate-500 text-sm mt-2">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
