import { Module } from '@nestjs/common';
import { DigestService } from './digest.service.js';

@Module({
  providers: [DigestService],
  exports: [DigestService],
})
export class DigestModule {}
