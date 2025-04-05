
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: "Legislação", href: "#legislacao" },
  { label: "Órgãos", href: "#orgaos" },
  { label: "NRs", href: "#normas" },
  { label: "Políticas", href: "#politicas" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Flashcards", href: "#flashcards" }
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-health-700 font-bold text-xl">StudyWel</span>
            <span className="hidden md:inline-block ml-2 text-sm text-health-500">Fisioterapia na Saúde do Trabalhador</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-health-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-3">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-health-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
