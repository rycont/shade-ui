import { Article } from './article';

export declare class GradualRenderer {
    private articleElement;
    renderQueue: string[];
    currentElement: HTMLElement | null;
    private flushing;
    referringArticleMap?: Map<string, Article>;
    set referringArticles(referringArticles: Article[]);
    constructor(articleElement: HTMLElement);
    render(content: string): void;
    private renderChar;
    private flush;
    getActions(content: string): {
        tag?: string | undefined;
        escape?: boolean | undefined;
        topLevel?: boolean | undefined;
        noChild?: boolean | undefined;
    }[];
}
