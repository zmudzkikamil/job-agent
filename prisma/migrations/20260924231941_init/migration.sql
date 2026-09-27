-- CreateTable
CREATE TABLE "JobOffer" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "fingerprint" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "salaryMin" INTEGER,
    "salaryMax" INTEGER,
    "contractType" TEXT,
    "seniority" TEXT,
    "skills" TEXT[],
    "description" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "score" INTEGER,
    "scoreReason" TEXT,
    "redFlags" TEXT[],
    "cvHints" JSONB,
    "rejectedBy" TEXT,
    "sentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourceRun" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "found" INTEGER NOT NULL,
    "created" INTEGER NOT NULL,
    "error" TEXT,
    "runAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SourceRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "JobOffer_fingerprint_idx" ON "JobOffer"("fingerprint");

-- CreateIndex
CREATE INDEX "JobOffer_score_sentAt_idx" ON "JobOffer"("score", "sentAt");

-- CreateIndex
CREATE UNIQUE INDEX "JobOffer_source_externalId_key" ON "JobOffer"("source", "externalId");

-- CreateIndex
CREATE INDEX "SourceRun_source_runAt_idx" ON "SourceRun"("source", "runAt");
