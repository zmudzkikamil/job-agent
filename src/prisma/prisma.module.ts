import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

// @Global, zeby nie importowac PrismaModule w kazdym module z osobna.
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
