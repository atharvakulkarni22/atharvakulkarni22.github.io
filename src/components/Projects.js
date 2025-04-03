export default function Projects() {
    const projects = [
      { title: "Portfolio Website", description: "React.js, Tailwind CSS, JavaScript", link: "https://atharvakulkarni22.github.io/" },
      { title: "Automated Prerequisite Waiver", description: "NLTK, Scikit-Learn, Gensim, Flask, JavaScript", link: "https://github.com/atharvakulkarni22/Graduate_Prerequisite_Waiver" },
      { title: "Grocery Store", description: "JavaScript, jQuery, Bootstrap", link: "https://github.com/atharvakulkarni22/Grocery_Application" }
    ];
  
    return (
      <section id="projects" className="py-20 text-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {projects.map((proj) => (
            <div key={proj.title} className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl">{proj.title}</h3>
              <p className="text-gray-400">{proj.description}</p>
              <a href={proj.link} className="text-blue-400 hover:underline mt-2 block">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  