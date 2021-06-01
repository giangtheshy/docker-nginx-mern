import dotenv from "dotenv";
dotenv.config();
import express from "express";

import ErrorMiddleware from "./middleware/errorMiddleware.js";
import LibraryError from "./utils/libraryError.js";
import connectToDB from "./database/connection.js";
import bookRouter from "./routes/book.router.js";

process.on("uncaughtException", (error) => {
    console.log("Uncaught Exception.... stopping the server");
    console.log(error.name, error.message);
    process.exit(1);
});

const app = express();

connectToDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/test", (req, res) => {
    res.json({ Hi: "Welcome to the server API" });
});
app.use("/api/v1", bookRouter);

// Error middleware
app.all("*", (req, res, next) => {
    next(new LibraryError(`Can't find ${req.originalUrl} on this server`));
});
app.use(ErrorMiddleware);

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

process.on("unhandledRejection", (error) => {
    console.log("Unhandled rejection.... stopping the server...");
    console.log(error.name, error.message);
    server.close(() => {
        process.exit(1);
    });
});
