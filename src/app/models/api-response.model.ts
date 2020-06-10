import { Article } from './article.model';

export class ApiResponse {
    data: Article[];
    meta: MetaData;
}

class MetaData {
    pageQuantity: number;
}