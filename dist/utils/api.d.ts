import { Article } from '../article';

export declare function createNewsletterFromArticles(articles: Article[], events: {
    token(token: string): void;
    relatedArticles(articles: Article[]): void;
}): Promise<{
    content: string;
    relatedArticles: Article[];
}>;
