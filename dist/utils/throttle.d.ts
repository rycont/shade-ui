export default function throttle<T extends unknown[]>(action: (...value: T) => void, delay: number): (...value: T) => void;
