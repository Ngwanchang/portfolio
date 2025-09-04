interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  { title: 'Project Alpha', description: 'A clean landing page with delightful micro-interactions.' },
  { title: 'Project Beta', description: 'A component library built with accessibility-first mindset.' },
  { title: 'Project Gamma', description: 'A marketing site with CMS integration and analytics.' },
];

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Portfolio</h1>
        <p className="text-lg text-gray-700">Selected work and experiments.</p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-orange-300"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}


