import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between bg-amber-500 h-20 font-bold items-center px-8"> 
                <div className="text-xl">
                    My Project
                </div>
                <div className="space-x-6">
                    <Link to="/" className="hover:text-white transition duration-300">Home</Link>
                    <Link to="/components" className="hover:text-white transition duration-300">Components</Link>
                    <Link to="/hooks" className="hover:text-white transition duration-300">Hooks</Link>
                    <Link to="/class">Class</Link>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
                    Get Started
                </button>
            </div>
        </nav>
    );
}

export default Navbar;