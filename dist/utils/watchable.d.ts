type Action<T> = (value: T) => void;
export declare class Watchable<T> {
    private _value;
    private actions;
    constructor(_value: T);
    get value(): T;
    set value(value: T);
    listen(action: Action<T>): void;
}
export {};
