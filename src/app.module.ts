import { Module } from '@nestjs/common';
import { PostgresqlModule } from './databases/postgresql/postgresql.module';

@Module({
  imports: [
    PostgresqlModule,
    // Other modules
  ],
})
export class AppModule { }
