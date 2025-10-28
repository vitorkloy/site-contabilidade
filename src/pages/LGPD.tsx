import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LGPD = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ContaExpert
            </Link>
            <Button variant="ghost" asChild>
              <Link to="/">Voltar ao Site</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Política de Privacidade e LGPD
            </h1>
            <p className="text-xl text-muted-foreground">
              Seu comprometimento com a proteção de dados pessoais
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Introdução
                </h2>
                <p className="text-muted-foreground mb-6">
                  A ContaExpert está comprometida com a proteção dos dados pessoais de seus clientes, 
                  parceiros e colaboradores, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>

                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
                  <Lock className="h-6 w-6 text-primary" />
                  Dados Coletados
                </h2>
                <p className="text-muted-foreground mb-4">
                  Coletamos e tratamos os seguintes tipos de dados pessoais:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Dados de identificação (nome, CPF/CNPJ, RG, endereço)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Dados de contato (telefone, e-mail)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Dados financeiros e tributários
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Dados relacionados à prestação de serviços contábeis
                    </span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
                  <Eye className="h-6 w-6 text-primary" />
                  Finalidade do Tratamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  Os dados pessoais coletados são utilizados exclusivamente para:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Prestação de serviços contábeis contratados
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Cumprimento de obrigações legais e regulatórias
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Comunicação com clientes sobre serviços
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Melhoria contínua de nossos processos e serviços
                    </span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
                  <Shield className="h-6 w-6 text-primary" />
                  Segurança dos Dados
                </h2>
                <p className="text-muted-foreground mb-6">
                  Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais 
                  contra acessos não autorizados, destruição, perda, alteração ou divulgação acidental ou ilegal. 
                  Isso inclui criptografia, controle de acesso, backup regular e treinamento de nossa equipe.
                </p>

                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  Seus Direitos
                </h2>
                <p className="text-muted-foreground mb-4">
                  De acordo com a LGPD, você tem direito a:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Confirmar a existência de tratamento de seus dados
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Acessar seus dados pessoais
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Corrigir dados incompletos, inexatos ou desatualizados
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Portabilidade dos dados a outro fornecedor
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Revogar o consentimento
                    </span>
                  </li>
                </ul>

                <div className="bg-secondary/50 border border-border rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold mb-3">Encarregado de Dados (DPO)</h3>
                  <p className="text-muted-foreground mb-4">
                    Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados pessoais, 
                    entre em contato com nosso Encarregado de Dados:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> dpo@contaexpert.com.br</p>
                    <p><strong>Telefone:</strong> (11) 4002-8922</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-8">
                  <strong>Última atualização:</strong> Janeiro de 2025
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/">Voltar ao Site</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LGPD;
