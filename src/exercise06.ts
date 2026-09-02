export class Stack<T> {

  private stack: T[] = [];

  public push(item: T): void {
    this.stack.push(item);
  }

  public pop(): T | undefined {
    return this.stack.pop();
  }

  public peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  public size(): number {
    return this.stack.length;
  }
}
