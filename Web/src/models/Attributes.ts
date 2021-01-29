export class Attributes<T> {
  constructor(private data: T) {}

  // This is a generic constraint which limits the types that K can be
  // Type of K can only be a key located on T (in this case name, age, or id)
  // We are using a string (the keys on T) as the type
  // The return type T[K] is using an object lookup (look at T and return value at key of K, return the corresponding type [name, age, or id]), this will be the type (string, number, or number)
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
