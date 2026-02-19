import { Client } from 'pg';

/*
FOR CONFIG OPTIONS
docs: https://node-postgres.com/apis/client
*/


export const pgclient = new Client();
await pgclient
  .connect()
  .then(() => { console.log("Database connected") })
  .catch((error) => { console.error(error) })


