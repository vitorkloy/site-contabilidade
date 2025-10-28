import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// 2. CHAVES USANDO VARIÁVEIS DE AMBIENTE DO VITE
/* const SERVICE_ID = "service_xjbjpzi";
const TEMPLATE_ID = "template_kzeasya";
const PUBLIC_KEY = "pzpfcXsVmFv6NIT7c"; */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // NOVO ESTADO: Para controlar o carregamento do envio
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Função para atualizar o estado do formulário (mantida)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FUNÇÃO DE ENVIO ATUALIZADA
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🛑 Evita envio duplo e desativa o envio se já estiver em progresso
    if (isSubmitting) return;

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e mensagem.",
        variant: "destructive",
      });
      return;
    }

    // Verifica se as chaves foram carregadas (Útil para desenvolvimento)
    if (!PUBLIC_KEY) {
      toast({
        title: "Erro de Configuração",
        description:
          "As chaves do EmailJS (VITE_) não foram carregadas corretamente.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true); // 🟢 Inicia o estado de envio

    try {
      // Envia os dados
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(`Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Erro ao enviar com EmailJS:", error);
      toast({
        title: "Erro no envio",
        description:
          "Ocorreu um problema, tente novamente. Verifique o console.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false); // 🔴 Finaliza o estado de envio
    }
  };

  const contatos = [
    {
      tel: "tel:+551230287027",
      display: "SJCampos – SP: (12) 3028-7027",
    },
    {
      tel: "tel:+553432930600",
      display: "Uberlândia – MG: (34) 3293-0600",
    },
    {
      tel: "tel:+5547991899799",
      display: "Joinville – SC: (47) 99189-9799",
    },
  ];

  const unidades = [
    {
      cidade: "São José dos Campos / SP",
      rua: "Rua: José Francisco Alves, 54",
      bairroCep: "Vila Ema | CEP: 12.243-060",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Rua+José+Francisco+Alves%2C+54%2C+Vila+Ema%2C+São+José+dos+Campos%2C+SP",
    },
    {
      cidade: "Uberlândia / MG",
      rua: "Rua: Itabira, 511",
      bairroCep: "Daniel Fonseca | CEP: 38400-324",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Rua+Itabira%2C+511%2C+Daniel+Fonseca%2C+Uberlândia%2C+MG",
    },
    {
      cidade: "Joinville / SC",
      rua: "Rua: Henrique Meyer, 280, sala 714",
      bairroCep: "Centro | CEP: 89.201-405",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Rua+Henrique+Meyer%2C+280%2C+sala+714%2C+Centro%2C+Joinville%2C+SC",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa a crescer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a
                      href="mailto:contato@globalpac.com.br"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contato@globalpac.com.br
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg mb-2">Telefone</h3> 
                    {contatos.map((contato, index) => (
                      <a
                        key={index}
                        href={contato.tel}
                        className="mt-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contato.display}
                      </a>
                    ))}{" "}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Endereços</h3>
                    <div className="text-muted-foreground text-sm grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {unidades.map((unidade, index) => (
                        <div key={index} className="flex flex-col">
                          <strong className="text-foreground">
                            {unidade.cidade}
                          </strong>
                          <span className="mt-1">{unidade.rua}</span>
                          <span>{unidade.bairroCep}</span>

                          <a
                            href={unidade.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block text-primary hover:underline text-sm"
                          >
                            Ver no Mapa
                          </a>
                        </div>
                      ))}
                    </div>{" "}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting} // Desativa campos durante o envio
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting} // Desativa campos durante o envio
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Seu telefone (opcional)"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting} // Desativa campos durante o envio
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting} // Desativa campos durante o envio
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting} // DESATIVA QUANDO ENVIANDO
                >
                  {/* TEXTO CONDICIONAL PARA FEEDBACK */}
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
