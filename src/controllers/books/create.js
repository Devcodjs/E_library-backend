import {prisma } from '../../utils/prisma.js'
export const create = async (req, res) => {
  try {
    const {
      title,
      author,
      publishers,
      rating,
      reviews,
      year,
      edition,
      achievement,
      category,
      userId,
    } = req.body;

    if (!title || !author || !category || !userId) {
      return res.status(400).json({ error: "Title, author, category, and userId are required" });
    }

    const newBook = await prisma.book.create({
      data: {
        title,
        author,
        publishers,
        rating,
        reviews,
        year: year ? new Date(year) : undefined, // convert to Date if provided
        edition,
        achievement,
        category,
        userId,
      },
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ error: "Failed to add book" });
  }
};
