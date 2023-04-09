<h2 align="center"><b>NestJS</b></h2>
<h3 align="center"><b>Clean Architecture (3 Layers/Classic)</b></h3>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://github.com/calvear93/nestjs-clean-architecture" target="_blank">
	<img src="https://img.shields.io/github/license/calvear93/nestjs-clean-architecture" alt="Package License" />
  </a>
</p>

## ⛩ **Structure**

```bash
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── __tests__/ # e2e tests and utilities
│   ├── application/ # use cases
│   ├── domain/ # core bussiness
│   ├── infrastructure/ # frameworks, service and adapters
│   ├── app.module.ts
│   └── main.ts # entrypoint
├── tsconfig.json
└── package.json
```

## 📥 **Getting Started**

-   Install [NodeJS](https://nodejs.org/es/).
-   Install [PNPM](https://pnpm.io/installation)
-   Execute `pnpm install` command.
-   Run `pnpm prisma migrate deploy`.
-   Run either `pnpm start` or `pnpm test` commands.

## 🧪 **Executing**

| Command             | Action                    |
| ------------------- | ------------------------- |
| pnpm start          | executes the api          |
| pnpm test           | executes tests            |
| pnpm prisma `<cmd>` | executes a prisma command |
| pnpm seed           | applies database seed     |

## ⚙️ **Commands**

### **1. [Prisma](https://www.prisma.io/docs/reference/api-reference/command-reference)**

| Command                               | Action                         |
| ------------------------------------- | ------------------------------ |
| pnpm prisma generate                  | generates prisma client        |
| pnpm prisma migrate dev --create-only | creates a new migration        |
| pnpm prisma migrate reset             | clears database                |
| pnpm prisma migrate deploy            | applies migrations to database |
