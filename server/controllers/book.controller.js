import Book from "../models/book.model.js";
import AsyncManager from "../utils/asyncManager.js";
import LibraryError from "../utils/libraryError.js";

export const createBook = AsyncManager(async (req, res, next) => {
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook);
});
export const getAllBooks = AsyncManager(async (req, res, next) => {
    const books = await Book.find();
    return res.status(200).json(books);
});
export const getBook = AsyncManager(async (req, res, next) => {
    const book = await Book.findById(req.params.id);
    if (!book) return next(new LibraryError(`That book is not available`, 404));

    return res.status(200).json(book);
});
export const updateBook = AsyncManager(async (req, res, next) => {
    const book = await Book.findById(req.params.id);
    if (!book) return next(new LibraryError(`That book is not available`, 404));
    const newBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    return res.status(200).json(newBook);
});
export const deleteBook = AsyncManager(async (req, res, next) => {
    const book = await Book.findById(req.params.id);
    if (!book) return next(new LibraryError(`That book is not available`, 404));
    await book.remove();
    return res.status(200).json({ message: "The book have been deleted" });
});
