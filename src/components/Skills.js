export default function About() {
  const skills = [
    { title: "Programming Languages", description: "Java, JavaScript, C#, Python, HTML/CSS, SQL" },
    { title: "Frameworks", description: "Spring Boot, React, Asp.Net, TailwindCSS, JPA, Junit, Mockito, TestNG, Kafka, Apache Spark"},
    { title: "Tools", description: "Git, CI/CD, Docker, Postman, Jenkins, Jira, Gerrit, Redux, GitHub, Hive, Hadoop"},
    { title: "Database and Cloud", description: "PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, AWS (EC2, S3)"}
  ];


    return (
      <section id="about" className="py-20 text-center">
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.title} className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  