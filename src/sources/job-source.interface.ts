// Kontrakt, ktory implementuje kazde zrodlo ofert.
// Nic poza katalogiem sources/ nie wie, z jakiego portalu pochodza dane.

export type RawOffer = {
  externalId: string;
  title: string;
  company: string;
  url: string;
  salaryMin?: number;
  salaryMax?: number;
  contractType?: string;
  seniority?: string;
  skills: string[];
  description: string;
  publishedAt?: Date;
};

export interface JobSource {
  readonly name: string;
  fetchOffers(): Promise<RawOffer[]>;
}

// Token DI pod tablice wszystkich zrodel. Dzieki niemu IngestionService
// dostaje JobSource[] i nie zna zadnej konkretnej implementacji.
export const JOB_SOURCES = Symbol('JOB_SOURCES');
