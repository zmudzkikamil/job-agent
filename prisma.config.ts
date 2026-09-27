// Konfiguracja Prisma CLI. Od Prisma 6 klucz `prisma` w package.json jest
// deprecated, a plik konfiguracyjny NIE laduje .env automatycznie - stad dotenv.
import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
});
