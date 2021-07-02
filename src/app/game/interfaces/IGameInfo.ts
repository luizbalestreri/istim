import { IAgeRange } from '../../ageRange/Interfaces/IAgeRange';
import { ICategory } from '../../category/Interfaces/ICategory';

export interface IGameInfo {
  id: number;
  title: string;
  value: number;
  description: string;
  releaseDate: Date;
  videoURL: string;
  image: string;
  categoryId: number;
  category: ICategory;
  ageRangeId: number;
  ageRange: IAgeRange;
}
