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
export interface ShadeInlineLinkProps {
    text: string;
    href: string;
    target?: string;
    rel?: string;
    download?: string;
    hreflang?: string;
    type?: string;
    referrerpolicy?: string;
    as?: string;
    crossorigin?: string;
    integrity?: string;
    media?: string;
    nonce?: string;
    sizes?: string;
    title?: string;
    children?: any;
}
