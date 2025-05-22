import movies from "../web/movies.json" with { type: "json" };
import { randomUUID } from "node:crypto";

export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      const movies = movies.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      );
      return movies;
    }
  }

  static async getById({ id }) {
    const movie = movies.find((movies) => movies.id === id);
    return movie;
  }

  static async create(input) {
    const newMovie = {
      id: randomUUID(),
      ...input,
    };
    movies.push(newMovie);
    return newMovie;
  }

  static async update({ id, input }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
      return false;
    }
    const updateMovie = {
      ...movies[movieIndex],
      ...input,
    };

    movies[movieIndex] = updateMovie;
    return true;
  }

  static async delete({ id }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
      return false;
    }

    movies.splice(movieIndex, 1);
    return true;
  }
}
