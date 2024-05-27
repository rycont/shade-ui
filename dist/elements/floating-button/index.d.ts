export declare class ShadeFloatingButton extends HTMLElement {
    private iconWrapper;
    constructor();
    connectedCallback(): void;
    drawIcon(): Promise<void>;
    setIconSize(): void;
    setTextColor(): void;
    setBackgroundColor(): void;
}
declare const name = "sh-floating-button";
export default name;
export interface ShadeFloatingButtonProps {
    icon?: string;
    'icon-width'?: string;
    'icon-height'?: string;
    'text-color'?: string;
    'background-color'?: string;
    children?: any;
}
