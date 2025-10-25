import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    port:string,
    DB_URL:string,
    NODE_ENV:"development"|"Production"
}

const loadEnvVariables = (): EnvConfig => {
    const requiredVars = ['PORT', 'DB_URL', 'NODE_ENV'];

    requiredVars.forEach((varName) => {
        if (!process.env[varName]) {
            throw new Error(`Environment variable ${varName} is missing`);
        }
    });

    return {
        port: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
        NODE_ENV: process.env.NODE_ENV as "development" | "Production",
    };
}





export const envVars = loadEnvVariables();