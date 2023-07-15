import { Injectable } from "@nestjs/common";
import { createConnection } from "typeorm";

@Injectable()
export class PostgresqlService {
  constructor() {
    this.connect();
  }

  private async connect() {
    try {
      await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "NodeJsCachingProject",
        synchronize: true, // Set to false in production
        logging: true, // Set to false in production
        entities: [], // Add your entities here
      });
      console.log("PostgreSQL connected");
    } catch (error) {
      console.error("Failed to connect to PostgreSQL:", error);
    }
  }
}
