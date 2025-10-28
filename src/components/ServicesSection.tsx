import { Card, CardContent } from "@/components/ui/card";
import { FileText, Calculator, Users, TrendingUp, Building2, Scale } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Escrituração Contábil",
    description: "Registro completo de todas as operações da sua empresa",
  },
  {
    icon: Calculator,
    title: "Planejamento Tributário",
    description: "Otimize sua carga tributária de forma legal e estratégica",
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    description: "Gestão completa de folha de pagamento e obrigações trabalhistas",
  },
  {
    icon: TrendingUp,
    title: "Consultorias Corporativa",
    description: "Análises e estratégias para crescimento sustentável",
  },
  {
    icon: Building2,
    title: "Constituição / Encerramento de Empresas",
    description: "Assessoria completa para constituição, legalização e/ou extinções.",
  },
  {
    icon: Scale,
    title: "Assessoria Fiscal e Contábil",
    description: "Cálculo de impostos (ICMS, IRPJ, ISS, etc.) e declarações fiscais. Suporte nas esferas Federal, Estadual e Municipal.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para todas as necessidades contábeis da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ 
                boxShadow: "var(--shadow-elegant)",
                transition: "var(--transition-smooth)"
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
