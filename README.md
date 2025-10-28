# 🌟 Bem-vindo ao Projeto

## Informações do Projeto

Este projeto é uma **Single Page Application (SPA)** de portfólio/institucional construída.

**Características Principais:**

* **Front-end Estático:** Desenvolvido para ser hospedado em serviços de deploy estático (como Vercel, Netlify).
* **Formulário de Contato Funcional:** A lógica de envio de e-mail é tratada inteiramente no front-end por um serviço de terceiros (EmailJS), eliminando a necessidade de um servidor backend dedicado.

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

* **Vite** — para o ambiente de desenvolvimento ultrarrápido e *bundling*.
* **React** — biblioteca para construção da interface do usuário.
* **TypeScript** — para tipagem estática, garantindo maior segurança e escalabilidade do código.
* **Tailwind CSS** — para estilização rápida e responsiva com classes utilitárias.
* **shadcn/ui** — biblioteca de componentes acessíveis e modernos baseados em Radix UI e Tailwind.
* **EmailJS** — serviço utilizado para enviar e-mails diretamente do front-end.

---

## ⬇️ Baixar e Configurar o Código

Se quiser trabalhar localmente utilizando o seu próprio ambiente de desenvolvimento, siga os passos abaixo:

> **Pré-requisitos:**
> É necessário ter o **Node.js** e o **npm** instalados.
> Caso não tenha, instale utilizando o [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating).

### Passo a passo

```sh
# Passo 1: Clone o repositório utilizando a URL do projeto.
git clone <URL_DO_SEU_REPOSITORIO>

# Passo 2: Acesse o diretório do projeto.
cd <NOME_DO_PROJETO>

# Passo 3: Instale as dependências necessárias.
npm i

# Passo 4: Configure as variáveis de ambiente (próxima seção).

# Passo 5: Inicie o servidor de desenvolvimento com atualização automática.
npm run dev


### 🔑 Configuração do Formulário de Contato (EmailJS)

Para que o formulário de contato funcione, você precisa configurar um arquivo de variáveis de ambiente do Vite.

1.  Crie uma conta no [EmailJS](https://www.emailjs.com/).

2.  Configure seu Serviço de E-mail (ex: Gmail) e crie um **Template** (modelo) de e-mail.

3.  Crie um arquivo chamado **`.env`** na raiz do projeto e insira suas chaves do EmailJS, seguindo o padrão do Vite (`VITE_`):

    ```env
    # .env
    # Chaves necessárias para o envio de e-mail (EmailJS)
    VITE_EMAILJS_SERVICE_ID="seu_service_id"
    VITE_EMAILJS_TEMPLATE_ID="seu_template_id"
    VITE_EMAILJS_PUBLIC_KEY="sua_chave_publica"
    ```

    > **Nota:** As variáveis com o prefixo `VITE_` são expostas no cliente (front-end), o que é seguro para a chave pública do EmailJS.

-----

## ☁️ Implantação do Projeto

A aplicação é um projeto estático gerado pelo Vite, ideal para hospedagem gratuita.

A implantação foi feita no serviço de hospedagem para aplicações front-end, **Vercel**.

Basta criar uma conta no serviço de sua escolha, conectar seu repositório e seguir as instruções de publicação.
O comando de build padrão para gerar a versão de produção é:

```sh
npm run build
```

Os arquivos prontos para deploy serão gerados na pasta **dist/**.

```
```