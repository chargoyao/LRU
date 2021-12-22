export default class Lru {
    private capacity;
    private map;
    constructor(capacity: number);
    get(key: any): any;
    put(key: any, value: any): void;
}
