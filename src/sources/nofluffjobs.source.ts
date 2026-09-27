import { Injectable, Logger } from '@nestjs/common';
import type { JobSource, RawOffer } from './job-source.interface.js';

@Injectable()
export class NoFluffJobsSource implements JobSource {
  readonly name = 'nfj';
  private readonly logger = new Logger(NoFluffJobsSource.name);

  // TODO(human): pobierz oferty z NoFluffJobs i zwroc je jako RawOffer[].
  //
  // Plan (modul 2) zaklada:
  //   POST https://nofluffjobs.com/api/search/posting?limit=100
  //   body: { criteriaSearch: { category: ['frontend', 'fullstack'] } }
  //   wlasny User-Agent, odpowiedz ma pole `postings`
  // Zweryfikuj to w przegladarce (zakladka Network) ZANIM zaczniesz pisac -
  // ksztalt odpowiedzi moze byc inny niz w planie.
  //
  // Dwie rzeczy, ktore musza tu byc:
  //  1. Walidacja odpowiedzi przez zod przed zmapowaniem na RawOffer.
  //     RawOffer to typ kompilacji - w runtimie nie chroni przed niczym.
  //     Gdy portal zmieni ksztalt JSON-a, ma polecic blad tutaj, a nie
  //     `undefined` przeciekajacy przez caly pipeline az do maila.
  //  2. Rzucenie bledu przy !res.ok - runAll() to zlapie i zapisze w SourceRun.
  //
  // externalId musi byc stabilny miedzy przebiegami - to on razem z `source`
  // tworzy klucz upserta. Jesli dzis zwrocisz inny id niz wczoraj dla tej samej
  // oferty, dostaniesz duplikat zamiast aktualizacji.
  async fetchOffers(): Promise<RawOffer[]> {
    throw new Error('TODO(human): NoFluffJobsSource.fetchOffers nie jest jeszcze zaimplementowane');
  }
}
