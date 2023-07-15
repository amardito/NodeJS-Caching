import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class PostgresqlService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'NodeJsCachingProject',
    });

    this.connect();
  }

  private async connect() {
    try {
      await this.pool.query('SELECT NOW()');
      console.log('PostgreSQL connected');
    } catch (error) {
      console.error('Failed to connect to PostgreSQL:', error);
    }
  }
}
