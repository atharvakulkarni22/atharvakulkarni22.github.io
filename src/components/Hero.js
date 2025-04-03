import profilePic from "../../src/assets/profile-pic.png";

export default function Hero() {
    return (
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="gap-10 justify-center items-center text-center">
            <div className="flex justify-center"> 
            <img src={profilePic} alt="Atharva Kulkarni" className="w-64 h-64 rounded-full border-4 justify-center border-purple-500 shadow-lg items-center" />
            </div>
            <div className="gap-2">
                <h1 className="text-xl font-bold justify-center items-end">Hi, I'm Atharva Kulkarni</h1>
                <p className="text-5xl mt-4 text-gray-300">Software Engineer</p>
            </div>
        </div>
      </section>
    );
  }
  