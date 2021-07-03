import { IGameInfo } from './IGameInfo';
export interface IUserGameInfo {
  id: number;
  applicationUserId: string;
  gameId: number;
  game: IGameInfo;
  rating?: number;
}
