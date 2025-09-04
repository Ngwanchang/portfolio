export default function BrowsePortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Browse Portfolio</h1>
        <p className="text-lg text-gray-700">Explore selected projects and case studies.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-orange-300">
            <div className="h-40 w-full rounded-lg bg-gray-100 mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Case Study {i}</h2>
            <p className="text-gray-700">A brief description of the work and outcomes.</p>
          </div>
        ))}
      </div>
    </main>
  );
}


