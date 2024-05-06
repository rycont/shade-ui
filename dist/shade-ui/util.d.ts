export declare function passAttributes(target: HTMLElement, origin: HTMLElement, attributes: string[]): void;
export declare class DefineOnce {
    private static defined;
    static define(tagName: string, element: CustomElementConstructor): void;
}
export declare function defaultProps(element: HTMLElement, attributes: Record<string, string>): void;
