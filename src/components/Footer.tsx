import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo-globalpac.png" alt="Globalpac" 
            className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            />
            <p className="text-muted-foreground text-sm">
              Soluções contábeis inteligentes para o crescimento do seu negócio.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Escrituração Contábil
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Planejamento Tributário
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <Link to="/lgpd" className="text-muted-foreground hover:text-primary transition-colors">
                  Política LGPD
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@globalpac.com.br</li>
              <li>SJCampos – SP: (12) 3028-7027</li>
              <li>Uberlândia – MG: (34) 3293-0600</li>
              <li>Joinville – SC: (47) 99189-9799</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Globalpac. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
