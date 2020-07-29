import { Client } from "https://deno.land/x/postgres/mod.ts";

class Database {
  constructor() {
    this.connect();
  }

  //TODO: Change to below to fit my db
  async connect() {
    this.client = new Client({
      user: "postgres",
      database: "stormn",
      hostname: "localhost",
      password: "postgres",
      port: 5432,
    });

    await this.client.connect();
  }
}

export default new Database().client;
