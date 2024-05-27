declare const name = "sh-input";
export default name;
export interface ShadeInputProps {
    placeholder?: string;
    type?: string;
    value?: string;
    autofocus?: boolean;
    disabled?: boolean;
    max?: string;
    min?: string;
    list?: string;
    readonly?: boolean;
    step?: string;
    pattern?: string;
    inputmode?: string;
    name?: string;
    icon?: string;
    children?: any;
}
