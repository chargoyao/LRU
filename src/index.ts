export default class Lru {
  private map: Map<any, any>;
  constructor(private capacity: number) {
    this.map = new Map();
  }
  public get(key: any) {
    if (this.map.has(key)) {
      const temp = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, temp);
      return temp;
    } else {
      return -1;
    }
  }
  public put(key: any, value: any) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
    this.map.set(key, value);
  }
}
