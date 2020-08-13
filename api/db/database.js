import { Client } from "https://deno.land/x/postgres/mod.ts";

async function main() {
  const client = new Client({
    user: "sean",
    database: "stormn",
    password: "Dodgers12",
    hostname: "localhost",
    port: 5433,
  });

  await client.connect();
  console.log("Connected");
  // const result = await client.query("SELECT * FROM users;");
  // console.log(result.rows);
  // const result = await client.query();

  await client.end();
}

export default main();

// import { Pool } from "https://deno.land/x/postgres@v0.4.0/mod.ts";
// import { PoolClient } from "https://deno.land/x/postgres@v0.4.0/client.ts";

// const POOL_CONNECTIONS = 20;
// const dbPool = new Pool(
//   {
//     user: "sean",
//     password: "Dodgers12",
//     database: "stormn",
//     hostname: "localhost",
//     port: 5433,
//   },
//   POOL_CONNECTIONS
// );

// async function runQuery(query) {
//   const client = await dbPool.connect();
//   const dbResult = await client.query(query);
//   client.release();
//   return dbResult;
// }

// runQuery("SELECT * FROM users;");
// runQuery("SELECT * FROM users WHERE id = '1';");
