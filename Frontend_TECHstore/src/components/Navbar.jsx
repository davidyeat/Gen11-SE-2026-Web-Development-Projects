import { useState } from "react";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";

const Navbar = ({ setPage = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Products", "About", "Categories", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            className="font-black text-2xl"
            onClick={() => setPage("home")}
          >
            <h1
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TECHstore
            </h1>
          </button>
        </div>
        
        {/* Navigation links (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link, index) => (
            <button
              key={index}
              className="text-md font-medium text-pretty text-gray-400 cursor-pointer hover:text-gray-800 transition-colors"
              onClick={() => setPage(link.toLowerCase())}
            >
              {link}
            </button>
          ))}
        </div>
        
        {/* Desktop search */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs mx-4 bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 bg-transparent text-gray-800 focus:outline-none"
          />
          <button
            className="px-3 py-2.5 bg-gray-700 rounded-xl hover:bg-gray-800 transition-colors"
            aria-label="Search"
          >
            <Search className="text-white w-5 h-5" />
          </button>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 rounded-md bg-gray-700 hover:bg-gray-800 transition-colors"
            aria-label="Search"
          >
            <Search className="text-white w-5 h-5" />
          </button>

          <button className="cursor-pointer relative p-2 text-lg hover:scale-110 transition-colors bg-gray-700 rounded-md hover:bg-gray-800">
            <ShoppingCart className="text-white w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>

          <button
            id="wishlist-btn"
            className="cursor-pointer relative p-2 text-lg hover:scale-110 transition-colors bg-gray-700 rounded-md hover:bg-gray-800"
          >
            <Heart className="text-white w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>

          <button
            id="user-btn"
            className="hidden md:flex cursor-pointer items-center justify-center p-2 text-lg hover:scale-110 transition-colors bg-gray-700 rounded-md hover:bg-gray-800"
          >
            <User className="text-white w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile left sidebar */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 w-64 bg-linear-to-r from-[#090c14] to-[#1a1f2e] duration-300 z-50 h-screen md:hidden overflow-hidden transition-transform">
            <div className="h-16 px-4 flex items-center justify-between border-b border-gray-600">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-md text-gray-800 hover:bg-gray-900 transition-colors"
                aria-label="Close menu"
              >
                <X className="text-white w-5 h-5 transition-colors"/>
              </button>
            </div>

            <div className="py-3">
              {links.map((link, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-5 py-3 rounded-md text-sm/6 text-gray-950 dark:text-white cursor-pointer hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    setPage(link.toLowerCase());
                    setMenuOpen(false);
                  }}
                >
                  {link}
                </button>
              ))}
            </div>
          </aside>
        </>
      )}
    </nav>
  );
};

export default Navbar;
