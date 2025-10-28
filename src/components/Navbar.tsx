import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const links = [
    { name: "Início", id: "home" },
    { name: "Sistema", id: "system" },
    { name: "Serviços", id: "services" },
    { name: "Parcerias", id: "partners" },
    { name: "Contato", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="../../public/image.png" alt="Globalpac" 
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              { links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button variant="hero" className="w-full group" asChild>
                <a href="https://globalpacplanejamento.app.questorpublico.com.br/entrar" target="_blank" rel="noopener noreferrer">
                  Plataforma
                  <ExternalLink className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
              

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-secondary rounded-md"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("system")}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-secondary rounded-md"
            >
              Sistema
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-secondary rounded-md"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-secondary rounded-md"
            >
              Parcerias
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-secondary rounded-md"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
