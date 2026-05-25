# Nexus Arcade — Entrega AngularJS + Vue/Vite

Este repositório contém dois protótipos front-end para a plataforma fictícia **Nexus Arcade**, uma loja gamer inspirada em plataformas como Steam, mas com foco em descoberta por intenção do jogador.

A entrega foi organizada em dois projetos independentes:

1. `angularjs-nexus-arcade` — versão em AngularJS.
2. `vue-vite-nexus-arcade` — versão em Vue.js com Vite.js.

## Conceito do produto

A Nexus Arcade parte da ideia de que o jogador não escolhe apenas por gênero ou preço. Ele escolhe pelo momento: relaxar, competir, explorar, jogar com amigos ou viver uma história.

Frase-guia:

> Uma plataforma de jogos que entende o jogador antes de oferecer o jogo.

## Componentes obrigatórios implementados

Os dois projetos implementam os seis componentes solicitados na atividade:

- Accordion / Acordeão
- Pagination / Paginação
- Progress Bar / Barra de progresso
- Tabs / Abas
- Dropdown Menu / Menu suspenso
- Toast Notification / Notificação toast

## Como executar a versão AngularJS

A versão AngularJS usa CDN do AngularJS 1.8.3.

### Opção simples

Abra o arquivo abaixo diretamente no navegador:

```bash
angularjs-nexus-arcade/index.html
```

### Opção recomendada com servidor local

Na pasta do projeto:

```bash
cd angularjs-nexus-arcade
python -m http.server 8000
```

Depois acesse:

```txt
http://localhost:8000
```

## Como executar a versão Vue + Vite

Na pasta do projeto Vue:

```bash
cd vue-vite-nexus-arcade
npm install
npm run dev
```

Para gerar build de produção:

```bash
npm run build
```

Para visualizar o build:

```bash
npm run preview
```

## Hospedagem no GitHub

Para subir no GitHub:

```bash
git init
git add .
git commit -m "Entrega Nexus Arcade AngularJS e Vue Vite"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Observação sobre GitHub Pages

- A pasta AngularJS pode ser hospedada diretamente como site estático.
- A pasta Vue/Vite precisa primeiro gerar o build com `npm run build`.
- Para GitHub Pages com Vite, pode ser necessário configurar `base` no `vite.config.js` caso o repositório não esteja na raiz de um domínio.

## Estrutura geral

```txt
nexus-arcade-entrega/
├── angularjs-nexus-arcade/
│   ├── index.html
│   ├── css/
│   └── js/
├── vue-vite-nexus-arcade/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
├── .gitignore
└── README.md
```

## Tecnologias utilizadas

### AngularJS

- AngularJS 1.8.3
- HTML5
- CSS3 responsivo
- Diretivas customizadas
- Services/factories
- Bindings e eventos com `ng-click`

### Vue + Vite

- Vue.js
- Vite.js
- Single File Components `.vue`
- Props
- Emits
- Computed properties
- Lifecycle hook `onMounted`
- CSS responsivo

## Autor

Projeto acadêmico desenvolvido como protótipo front-end da plataforma fictícia **Nexus Arcade**.
