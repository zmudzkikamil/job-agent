import { Controller, Post } from '@nestjs/common';
import { IngestionService } from '../ingestion/ingestion.service.js';
import { DigestService } from '../digest/digest.service.js';

// Reczny spust na czas budowy. W dniu 3 to samo odpala @Cron.
@Controller('debug')
export class DebugController {
  constructor(
    private readonly ingestion: IngestionService,
    private readonly digest: DigestService,
  ) {}

  // TODO(human): odpal caly przebieg i zwroc cos, co widac w odpowiedzi curla.
  //
  // Dzien 1: runAll() -> send().
  // Zwroc podsumowanie (ile ofert, ile nowych), zeby nie trzeba bylo
  // zagladac do logow przy kazdym uruchomieniu.
  @Post('run')
  async run(): Promise<unknown> {
    throw new Error('TODO(human): DebugController.run nie jest jeszcze zaimplementowane');
  }
}
