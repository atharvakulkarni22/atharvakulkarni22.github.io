import profilePic from "../../src/assets/profile-pic.png";

export default function Hero() {
    return (
      <section id="home" className="flex items-center justify-center px-4 py-20">
        <div className="lex flex-col md:flex-row gap-10 text-white w-full max-w-5xl">
            <div className="flex flex-col justify-center items-center text-center">
                <div className="flex justify-center mb-4"> 
                    <img src={profilePic} alt="Atharva Kulkarni" className="w-48 h-48 rounded-full border-4 justify-center border-white shadow-lg items-center" />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Hi, I'm Atharva Kulkarni</h1>
                    <p className="text-2xl sm:text-3xl text-gray-300">Software Engineer</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-300 max-w-2xl mx-auto">
            I am a passionate and skilled software engineer currently pursuing a Master of Science in Computer Science at the University of Texas at Dallas. With a solid foundation in Information Technology and hands-on experience in diverse programming languages and technologies, I am excited about both frontend as well as backend development. I have applied my skills in various projects, like mobile wallet implementation at ACI Worldwide, enhancing cross-platform deployment at ORIOLE, and developing a robust user management system. With a strong foundation in software development, I have also explored machine learning, NLP, and big data analytics. I am adept at working in Agile environments, ensuring seamless integration and exceptional functionality. Feel free to get in touch if you're interested in collaborating on open-source projects, or simply having a friendly conversation about tech.
            </p>
            </div>
        </div>
        
      </section>
    );
  }
  