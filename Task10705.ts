type Primitive = string | number | boolean | symbol | null | undefined; //This is used to distinguish between primitive values and objects.

type DeepMerge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? K extends keyof T
      ? T[K] extends Primitive
        ? U[K] extends Primitive
          ? U[K]
          : never
        : DeepMerge<T[K], U[K]>
      : U[K]
    : K extends keyof T
    ? T[K]
    : never;
};

function deepMerge<T, U>(obj1: T, obj2: U): DeepMerge<T, U> { //take 2 arguments obj1, obj2 and return 

  const result: any = { ...obj1 }; //This creates a new object result which is a shallow copy of obj1

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) { //This checks if obj2 actually has the property key itself
      if (Object.prototype.hasOwnProperty.call(obj1, key)) { //This checks if obj2 actually has the property key itself
        if (isObject((obj1 as any)[key]) && isObject((obj2 as any)[key])) {
          result[key] = deepMerge((obj1 as any)[key], (obj2 as any)[key]);
        } else {
          if (typeof (obj1 as any)[key] !== typeof (obj2 as any)[key]) {
            throw new TypeError(`Type mismatch for key '${key}': ${typeof (obj1 as any)[key]} vs ${typeof (obj2 as any)[key]}`);
          }
          result[key] = obj2[key];
        }
      } else {
        result[key] = obj2[key]; //where obj1 does not have the property key.
      }
    }
  }

  return result;
}

function isObject(obj: any): obj is object {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

// Example usage
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

const merged = deepMerge(obj1, obj2);

console.log(merged);
// Output: { a: 1, b: { c: 2, d: 3 }, e: 4 }
