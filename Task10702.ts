function deepGet<T>(obj: any, keys: string | string[]): T | undefined {
  if (!Array.isArray(keys)) {
      keys = keys.split(".");
  }

  let value: any = obj;

  for (const key of keys) {
      if (typeof value !== "object" || value === null || !(key in value)) {
          return undefined; // Key not found or value is not an object
      }
      value = value[key];
  }


    
  return value as T;
}

//checking
const obj = {
  foo: {
      bar: {
          baz: "value",
          p: "sid",
      },
  },
};

const value1 = deepGet<string>(obj, "foo.bar.baz");
console.log(value1); // Output: "value"

const value2 = deepGet<string>(obj, ["foo", "bar", "p"]);
console.log(value2); // Output: "value"
