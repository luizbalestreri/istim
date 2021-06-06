import { Injectable } from '@angular/core';

import { Game } from '../../models/game.model';
import { HttpBaseService } from './http-base.service';

@Injectable()
export class GameDataService extends HttpBaseService {

    fireRequest(game: Game, method: string) {

        const links = game.links
            ? game.links.find(x => x.method === method)
            : null;

        switch (method) {
            case 'DELETE': {
                return super.delete(links.href);
            }
            case 'POST': {
                return super.add<Game>(game);
            }
            case 'PUT': {
                return super.update<Game>(links.href, game);
            }
            default: {
                console.log(`${links.method} not found!!!`);
                break;
            }
        }
    }
}
