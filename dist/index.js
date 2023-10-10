"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lru {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (this.map.has(key)) {
            const temp = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, temp);
            return temp;
        }
        else {
            return -1;
        }
    }
    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        }
        else if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
        this.map.set(key, value);
    }
}
exports.default = Lru;
