export interface IGame {
  id: number;
  title: string;
  value: number;
  description: string;
  releaseDate: Date;
  videoURL: string;
  image: string;
  categoryId: number;
  ageRangeId: number;
}
