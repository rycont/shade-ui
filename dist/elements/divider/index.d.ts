import { COLORS } from '../../colors';

declare const NAME = "sh-divider";
export default NAME;
export interface ShadeDividerProps {
    color: keyof typeof COLORS;
}
