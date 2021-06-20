export interface IGame {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  videoURL: string;
  image: string;
  categoryId: number;
  genreId: number;
  ageRangeId: number;
}
