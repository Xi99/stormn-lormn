import { Client } from "https://deno.land/x/postgres/mod.ts";

// class Database {
//   constructor() {
//     this.connect();
//   }

async function main() {
  const client = new Client({
    user: "postgres",
    database: "stormn",
    hostname: "localhost",
    password: "postgres",
    port: 5432,
  });

  await client.connect();
}

export default main();
// new Database().client;
