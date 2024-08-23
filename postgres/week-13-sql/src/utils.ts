import { config } from 'dotenv';
config();
import { Client } from 'pg';

export async function getClient() {
    const client = new Client({
        connectionString: process.env.SUPABASE_DATABASE_URL,  // Use your actual connection string or an environment variable
        ssl: {
            rejectUnauthorized: false,  // Required for SSL connections to Supabase
        },
    });

    await client.connect();
    return client;
}