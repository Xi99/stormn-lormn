import { Client } from "https://deno.land/x/postgres/mod.ts";

// class Database {
//   constructor() {
//     this.connect();
//   }

async function main() {
  const client = new Client({
    user: "postgres",
    database: "stormn",
    password: "postgres",
    hostname: "localhost",
    port: 5432,
  });

  await client.connect();
  console.log("Connected");
  await client.end();
}

// export default main();
main();
