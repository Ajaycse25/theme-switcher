import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'theme-dark';
  const isColorful = theme === 'theme-colorful';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center
      shadow-md backdrop-blur-md transition-all
      ${isDark ? 'bg-gray-900/90 text-white' : isColorful ? 'bg-pink-100/90 text-gray-900' : 'bg-white/90 text-gray-900'}`}
    >
      {/* Left section */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-extrabold tracking-wide">🖼️ Theme App</h1>

        {/* Navigation links */}
        <nav className="hidden sm:flex gap-4 text-sm font-medium">
          <Link
            to="/"
            className={`hover:underline transition-colors ${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:underline transition-colors ${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:underline transition-colors ${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Theme dropdown */}
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className={`px-3 py-2 border rounded text-sm transition 
        ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
      >
        <option value="theme-default">Theme 1 – Default</option>
        <option value="theme-dark">Theme 2 – Dark</option>
        <option value="theme-colorful">Theme 3 – Colorful</option>
      </select>
    </header>
  );
}
