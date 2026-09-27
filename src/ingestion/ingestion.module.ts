import { Module } from '@nestjs/common';
import { SourcesModule } from '../sources/sources.module.js';
import { IngestionService } from './ingestion.service.js';

@Module({
  imports: [SourcesModule],
  providers: [IngestionService],
  exports: [IngestionService],
})
export class IngestionModule {}
