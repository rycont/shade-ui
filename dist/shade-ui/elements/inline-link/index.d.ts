export declare class ShadeInlineLink extends HTMLElement {
    private anchorElement;
    private iconElement;
    static observedAttributes: string[];
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    appendChild<T extends Node>(node: T): T;
}
declare const INLINE_LINK = "sh-inline-link";
export default INLINE_LINK;
