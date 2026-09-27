import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module.js';
import { IngestionModule } from './ingestion/ingestion.module.js';
import { DigestModule } from './digest/digest.module.js';
import { DebugController } from './debug/debug.controller.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    IngestionModule,
    DigestModule,
  ],
  controllers: [DebugController],
})
export class AppModule {}
