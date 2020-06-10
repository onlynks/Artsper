import { Artist } from './artist.model';

export class Article {

    artwork_title?: string;
    category?: {label:{fr:string}};
    artwork_dimension_w?: number;
    artwork_dimension_h?: number;
    artwork_dimension_l?: number;
    artist?: Artist;
    prices?: {};
    images?: [{absolute_path: string}];
}