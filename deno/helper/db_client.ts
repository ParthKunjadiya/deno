import {
  Database,
  MongoClient,
} from "https://deno.land/x/mongo@v0.33.0/mod.ts";
let db: Database;

export async function connect() {
  const client = new MongoClient();
  await client.connect(
    "mongodb+srv://Parth:tziwHXfilxYQw4zI@cluster0.tajycs5.mongodb.net/deno-todo-app?authMechanism=SCRAM-SHA-1"
  );
  console.log("DB CONNECTED");
  // await client.connect({
  //     db: "deno-todo-app",
  //     tls: true,
  //     servers: [
  //       {
  //         host: "<db_cluster_url>",
  //         port: 27017,
  //       },
  //     ],
  //     credential: {
  //       username: "kush",
  //       password: "<password>",
  //       db: "<db_name>",
  //       mechanism: "SCRAM-SHA-1",
  //     },
  //   })

  db = client.database("deno-todo-app");
}

export function getDb() {
  return db;
}
