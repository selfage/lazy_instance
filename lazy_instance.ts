export class LazyInstance<T> {
  public get: () => T = this.getFirstTime;

  private instance: T;

  public constructor(private constructFn: () => T) {}

  private getFirstTime(): T {
    this.instance = this.constructFn();
    this.get = this.getObj;
    return this.instance;
  }

  private getObj(): T {
    return this.instance;
  }
}
