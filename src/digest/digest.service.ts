import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DigestService {
  private readonly logger = new Logger(DigestService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  // TODO(human): wyslij surowy mail z lista tytulow i linkow.
  //
  // Dzien 1 celowo BEZ scoringu i bez sentAt - chodzi tylko o to, zeby
  // pierwszego dnia wyszla realna wiadomosc. Warunki z modulu 5
  // (score >= 70 AND sentAt = null) dokladasz w dniu 3.
  //
  // Klucz i adresy sa w .env: RESEND_API_KEY, DIGEST_FROM, DIGEST_TO.
  // Jesli nie masz jeszcze zweryfikowanej domeny w Resend, nadawca moze byc
  // onboarding@resend.dev - wysyla tylko na adres wlasciciela konta.
  async send(): Promise<void> {
    throw new Error('TODO(human): DigestService.send nie jest jeszcze zaimplementowane');
  }
}
