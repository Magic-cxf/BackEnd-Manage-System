class localCache {
  setCache(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  clearCache() {
    localStorage.clear()
  }
}

export default new localCache()
