import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  JOB_SOURCES,
  type JobSource,
  type RawOffer,
} from '../sources/job-source.interface.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class IngestionService {
  private readonly logger = new Logger(IngestionService.name);

  constructor(
    private readonly prisma: PrismaService,
    @Inject(JOB_SOURCES) private readonly sources: JobSource[],
  ) {}

  // TODO(human): zapisz oferty do bazy i zwroc liczbe NOWO utworzonych.
  //
  // Niezmiennik: `update` w upsercie zostaje PUSTE.
  // Oferta, ktora zostala juz oceniona i wyslana, nie ma prawa wrocic do
  // kolejki scoringu. Gdyby bylo tam `update: offer`, kazdy przebieg cronu
  // kasowalby score i placilbys za te sama ocene codziennie.
  //
  // Uwaga na liczenie `created`: plan proponuje porownanie createdAt z updatedAt,
  // ale w schemacie nie ma pola updatedAt. Zdecyduj, jak to policzyc.
  //
  // fingerprint na dzien 1 moze byc czymkolwiek niepustym - liczy sie dopiero
  // przy dedupie w dniu 4.
  async ingest(source: string, offers: RawOffer[]): Promise<number> {
    throw new Error('TODO(human): IngestionService.ingest nie jest jeszcze zaimplementowane');
  }

  // TODO(human): odpytaj wszystkie zrodla i zapisz wynik kazdego w SourceRun.
  //
  // Promise.allSettled, nie Promise.all - padniety scraper jednego portalu
  // nie moze zablokowac maila z ofertami z pozostalych.
  // Kazde zrodlo dostaje wpis w SourceRun rowniez wtedy, gdy poleglo:
  // found=0, created=0, error=<powod>. To jest caly health check tego systemu.
  async runAll(): Promise<void> {
    throw new Error('TODO(human): IngestionService.runAll nie jest jeszcze zaimplementowane');
  }
}
