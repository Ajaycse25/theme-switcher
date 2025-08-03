import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-4 bg-gray-900 text-white w-60 p-6 min-h-screen shadow-lg">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <nav className="flex flex-col gap-2 text-base font-medium">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </nav>
    </aside>
  );
}
