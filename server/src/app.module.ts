import { AzureStorageModule } from '@nestjs/azure-storage';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureDbModule } from './azure-db/azure-db.module';
import { DebugSentimentAnalysisController } from './debug-sentiment-analysis/debug-sentiment-analysis.controller';
import { ReportController } from './report/report.controller';
import { RetrieveNotesController } from './retrieve-notes/retrieve-notes.controller';
import { RetrieveNotesService } from './retrieve-notes/retrieve-notes.service';
import { TextAnalyticsModule } from './text-analytics/text-analytics.module';
import { TextAnalyticsService } from './text-analytics/text-analytics.service';
import { UploadImageController } from './upload-image/upload-image.controller';
import { UploadNoteController } from './upload-note/upload-note.controller';
import { VoteController } from './vote/vote.controller';

@Module({
  imports: [
    TextAnalyticsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AzureDbModule,
    AzureStorageModule.withConfig({
      sasKey: process.env['AZURE-STORAGE-SAS-KEY'],
      accountName: process.env['AZURE-BLOB-STORAGE-ACCOUNT'],
      containerName: 'note-images',
    }),
  ],
  controllers: [
    AppController, 
    DebugSentimentAnalysisController, 
    UploadNoteController, 
    UploadImageController, 
    RetrieveNotesController, 
    ReportController, VoteController,
  ],
  providers: [AppService, TextAnalyticsService, RetrieveNotesService],
})
export class AppModule {}
