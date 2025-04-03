export default function Navbar() {
    return (
      <nav className="fixed w-full bg-gray-800 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#top"><h1 className="text-2xl font-bold text-white">Atharva Kulkarni</h1></a>
          <ul className="hidden md:flex space-x-6 justify-start">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-white hover:text-gray-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
  