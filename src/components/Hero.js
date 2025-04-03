import profilePic from "../../src/assets/profile-pic.png";

export default function Hero() {
    return (
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="flex gap-10 text-white">
            <div className="gap-10 justify-center items-center text-center">
                <div className="flex justify-center"> 
                    <img src={profilePic} alt="Atharva Kulkarni" className="w-64 h-64 rounded-full border-4 justify-center border-white shadow-lg items-center" />
                </div>
                <div className="gap-2">
                    <h1 className="text-xl font-bold justify-center items-end">Hi, I'm Atharva Kulkarni</h1>
                    <p className="text-5xl mt-4 text-gray-300">Software Engineer</p>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center text-center">
                <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
            I am a passionate and skilled software engineer currently pursuing a Master of Science in Computer Science at the University of Texas at Dallas. With a solid foundation in Information Technology and hands-on experience in diverse programming languages and technologies, I am excited about both frontend as well as backend development. I have applied my skills in various projects, like mobile wallet implementation at ACI Worldwide, enhancing cross-platform deployment at ORIOLE, and developing a robust user management system. With a strong foundation in software development, I have also explored machine learning, NLP, and big data analytics. I am adept at working in Agile environments, ensuring seamless integration and exceptional functionality. My expertise spans Java, JavaScript, Spring Boot, React, C#, Asp.Net, and various other frameworks and tools. As I actively seek new opportunities, I am eager to bring my dedication to excellence and my enthusiasm for tackling complex challenges to a forward-thinking organization. Feel free to get in touch if you're interested in collaborating on open-source projects, or simply having a friendly conversation about tech.
            </p>
            </div>
        </div>
        
      </section>
    );
  }
  