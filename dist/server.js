import express from "express";
import { Server } from "http";
import mongoose from "mongoose";
let server;
const app = express();
const startServer = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mydatabase", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};
//# sourceMappingURL=server.js.map