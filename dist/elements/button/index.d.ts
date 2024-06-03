declare const NAME = "sh-button";
export default NAME;
export interface ShadeButtonProps {
    type?: 'accent' | 'secondary' | 'ghost';
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    children?: any;
    size?: 'default' | 'big' | 'bigger';
}
