import { Server } from "http";
import mongoose from "mongoose";
import app from "./app.js";
import { promise } from "zod";
import { env } from "process";
import { envVars } from "./app/config/env.js";

let server: Server;


const startServer = async () => {
    try {
        console.log("DB_URL:", process.env.DB_URL);

        console.log(envVars.NODE_ENV);
        await mongoose.connect(envVars.DB_URL);
        console.log("Connected to MongoDB");  
        server=app.listen(envVars.port, () => {
            console.log("Server is running on port " + envVars.port);
        });  
    }catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

startServer();


process.on("unhandledRejection",()=>{
    console.log("Unhandled Rejection! Shutting down...");

    if(server){
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);

})

process.on("uncaughtException",()=>{
    console.log("Uncaught Exception! Shutting down...");
    if(server){
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});


// Promise.reject(new Error("Some unhandled rejection"));
//  throw new Error("Some uncaught exception");
