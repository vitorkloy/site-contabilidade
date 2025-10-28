import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Lock, Zap, TrendingUp } from "lucide-react";
import systemImage from "@/assets/system-dashboard.jpg";

const SystemSection = () => {
  return (
    <section id="system" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sistema de Gestão Contábil
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plataforma QuestorZen: Completa para gerenciar toda a contabilidade da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Automação Inteligente</h3>
                    <p className="text-muted-foreground">
                      Automatize processos repetitivos e ganhe tempo para focar no estratégico
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Lock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Segurança Total</h3>
                    <p className="text-muted-foreground">
                      Dados criptografados e backup automático em conformidade com LGPD
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Relatórios em Tempo Real</h3>
                    <p className="text-muted-foreground">
                      Acesso Imediato à Informação: Relatórios e análises com indicadores financeiros e gerenciais, disponíveis em tempo real.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button variant="hero" size="lg" className="w-full group" asChild>
              <a href="https://globalpacplanejamento.app.questorpublico.com.br/entrar" target="_blank" rel="noopener noreferrer">
                Acessar Sistema QuestorZen
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img
                src={systemImage}
                alt="Sistema de Gestão Contábil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
