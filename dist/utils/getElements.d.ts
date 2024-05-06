export declare const getElements: <K extends string, T extends Record<K, {
    new (): HTMLElement;
    prototype: HTMLElement;
}>>(targets: T) => { [K_1 in keyof T]: InstanceType<T[K_1]>; };
