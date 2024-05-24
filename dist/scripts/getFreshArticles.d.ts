import { ContentProvidersResponse } from '../pocketbase-types';
import { Article } from '../article';

export declare function getFreshArticles(provider: ContentProvidersResponse): Promise<Article[]>;
