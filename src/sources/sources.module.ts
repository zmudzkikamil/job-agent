import { Module } from '@nestjs/common';
import { JOB_SOURCES, type JobSource } from './job-source.interface.js';
import { NoFluffJobsSource } from './nofluffjobs.source.js';

// Dodanie kolejnego portalu: nowy plik + dopisanie klasy w dwoch miejscach nizej.
// Reszta systemu sie nie zmienia.
@Module({
  providers: [
    NoFluffJobsSource,
    {
      provide: JOB_SOURCES,
      useFactory: (...sources: JobSource[]): JobSource[] => sources,
      inject: [NoFluffJobsSource],
    },
  ],
  exports: [JOB_SOURCES],
})
export class SourcesModule {}
