# 📧 Contact Form React

Um formulário de contato moderno e responsivo construído com **React**, **Vite** e **Styled Components**. O projeto oferece validação de formulário em tempo real, feedback visual ao usuário e notificações toast.

## 🎯 Características

- ✅ **Validação de Formulário**: Validação de email em tempo real e campos obrigatórios
- 🎨 **Design Responsivo**: Layout otimizado para mobile (375px) e desktop (1440px)
- 🔔 **Toast Notifications**: Mensagem de sucesso quando o formulário é enviado
- 🎭 **Styled Components**: Estilização dinâmica e reutilizável
- ⚡ **Vite**: Build rápido e desenvolvimento com HMR (Hot Module Replacement)
- 📝 **Componentes Reutilizáveis**: Componentes isolados e bem estruturados

## 📋 Campos do Formulário

- **First Name** (Obrigatório)
- **Last Name** (Obrigatório)
- **Email Address** (Obrigatório com validação)
- **Query Type** (Tipo de consulta - Obrigatório)
  - General Enquiry
  - Support Request
- **Message** (Obrigatório)
- **Consent Checkbox** (Obrigatório para submissão)

## 🛠️ Tecnologias Utilizadas

- **React 19.2.5** - Biblioteca JavaScript para UI
- **Vite 8.0.10** - Build tool e dev server
- **Styled Components 6.4.1** - CSS-in-JS para estilização
- **React Router DOM 7.14.2** - Roteamento (base instalada)
- **ESLint 10.2.1** - Linter de código

## 📦 Estrutura do Projeto

```
src/
├── assets/                    # Imagens e ícones
│   └── images/
│       └── icon-success-check.svg
├── components/               # Componentes reutilizáveis
│   ├── DivInput/
│   │   ├── input.jsx        # Componente de input
│   │   └── styles.js        # Estilos do input
│   ├── TextArea/            # Componente de textarea
│   └── QueryInput/          # Componente de seleção de query
├── pages/
│   └── Home/                # Página principal
│       ├── index.jsx        # Componente principal do formulário
│       └── styles.js        # Estilos da página
├── styles/
│   └── GlobalStyles.js      # Estilos globais
├── App.css                  # Estilos da aplicação
├── index.css                # Estilos base
├── main.jsx                 # Ponto de entrada
└── style-guide.md           # Guia de estilos de design

public/                       # Arquivos estáticos
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/BernardoWE/Contact-form-react.git
cd Contact-form-react
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Vite
- `npm run build` - Cria a versão otimizada para produção
- `npm run preview` - Pré-visualiza a build de produção localmente
- `npm run lint` - Executa o ESLint para verificar qualidade do código

## 🎨 Design e Cores

### Cores Primárias
- **Green 200** (Light): `hsl(148, 38%, 91%)`
- **Green 600** (Medium): `hsl(169, 82%, 27%)`
- **Red** (Error): `hsl(0, 66%, 54%)`

### Cores Neutras
- **White**: `hsl(0, 0%, 100%)`
- **Grey 500** (Medium): `hsl(186, 15%, 59%)`
- **Grey 900** (Dark): `hsl(187, 24%, 22%)`

### Tipografia
- **Fonte**: Karla (400, 700)
- **Tamanho base**: 16px

## ✨ Funcionalidades Principais

### Validação de Formulário
O formulário valida:
- Campos obrigatórios não vazios
- Formato de email válido
- Seleção de tipo de consulta
- Consentimento de contato

### Feedback do Usuário
- Mensagens de erro em tempo real
- Destaque visual de campos com erro
- Toast de sucesso quando formulário é enviado
- Limpeza automática do formulário após submissão

### Responsividade
O design é totalmente responsivo e se adapta a diferentes tamanhos de tela, de mobile (375px) até desktop (1440px).

## 🔄 Fluxo de Submissão

1. Usuário preenche o formulário
2. Ao clicar em "Submit", o formulário é validado
3. Se houver erros, eles são exibidos ao usuário
4. Se validado, um toast de sucesso é mostrado
5. O formulário é limpo automaticamente
6. Toast desaparece após 3 segundos

## 💡 Próximas Melhorias

- [ ] Integração com API backend
- [ ] Adição de mais tipos de query
- [ ] Implementação de captcha
- [ ] Adição de testes automatizados
- [ ] Temas escuro/claro
- [ ] Melhorias de acessibilidade (WCAG)

## 📝 Licença

Este projeto é de código aberto e está disponível sob licença MIT.

## 👨‍💻 Desenvolvedor

**Bernardo WE** - [@BernardoWE](https://github.com/BernardoWE)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para fazer um fork do projeto, criar uma branch para sua feature e submeter um pull request.

---

**Desenvolvido com ❤️ usando React e Vite**
