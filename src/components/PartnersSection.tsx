import { Card, CardContent } from "@/components/ui/card";

const partners = [
  { name: "Receita Federal", logo: "/placeholder.svg" },
  { name: "CRC", logo: "/placeholder.svg" },
  { name: "SEFAZ", logo: "/placeholder.svg" },
  { name: "Junta Comercial", logo: "/placeholder.svg" },
  { name: "Banco do Brasil", logo: "/placeholder.svg" },
  { name: "Caixa Econômica", logo: "/placeholder.svg" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Parcerias e Integrações
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conectados com as principais instituições para facilitar seus processos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300"
              style={{ transition: "var(--transition-smooth)" }}
            >
              <CardContent className="p-6 flex items-center justify-center">
                <div className="aspect-square w-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-muted flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-12 h-12 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">{partner.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
