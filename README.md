# Safe Spot

Monorepo para controle de vagas de estacionamento rotativas.

## Estrutura

- **apps/web** — Vite + React (configuração da rotação)
- **apps/mobile** — Expo (consulta: tenho vaga hoje?)
- **convex/** — Backend Convex (compartilhado)

## Pré-requisitos

- [Bun](https://bun.sh)
- Conta [Convex](https://convex.dev) (login via GitHub)

## Setup

```bash
# Instalar dependências (na raiz)
bun install

# 1. Vincular Convex (cria convex/ e .env.local na raiz)
bun run dev:convex
# Faça login quando solicitado; deixe rodando ou Ctrl+C após criar o projeto.

# 2. Copiar URL do Convex para os apps
# Raiz: .env.local contém CONVEX_URL
# apps/web: crie .env.local com VITE_CONVEX_URL=<mesmo valor>
# apps/mobile: crie .env.local com EXPO_PUBLIC_CONVEX_URL=<mesmo valor>
```

## Desenvolvimento

```bash
# Terminal 1 — Backend
bun run dev:convex

# Terminal 2 — Web
bun run dev:web

# Terminal 3 — Mobile
bun run dev:mobile
```

- Web: http://localhost:5173  
- Mobile: escaneie o QR code no terminal ou use emulador.
