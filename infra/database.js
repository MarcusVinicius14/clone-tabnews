import { Client } from "pg";

async function query(queryRequest) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  try {
    const res = await client.query(queryRequest);
    return res;
  } catch (error) {
    console.error(
      "erro ao tentar conexão com o banco de dados:",
      error.message,
    );
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
