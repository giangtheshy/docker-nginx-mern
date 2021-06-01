import express from "express";
import * as book from "../controllers/book.controller.js";

const router = express.Router();

router.route("/books").get(book.getAllBooks).post(book.createBook);
router.route("/books/:id").get(book.getBook).delete(book.deleteBook);

export default router;
