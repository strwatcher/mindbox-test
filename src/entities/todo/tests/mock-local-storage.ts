export class MockLocalStorage {
  private data: Record<string, string> = {};
  setItem(key: string, value: string) {
    this.data[key] = value;
  }

  getItem(key: string) {
    return this.data[key];
  }
}
