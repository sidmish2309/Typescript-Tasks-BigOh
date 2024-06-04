type MapObjectCallback<T> = (value: T) => any; //This line defines a type alias MapObjectCallback for a callback function that takes a parameter of type T and returns any.


//takes two parameters one is object and another is call back function

function mapObject<T extends Record<string, any>>(     //T can be any object type.
  obj: T,
  callback: MapObjectCallback<T[keyof T]>,    //callback should work on each element of object
): { [K in keyof T]: ReturnType<MapObjectCallback<T[K]>> } { //its infer should be object and key values should be of type provided by callback

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, callback(value)]),
  ) as { [K in keyof T]: ReturnType<MapObjectCallback<T[K]>> };
}

const originalObject = { a: 1, b: 2, c: 3 };

const mappedObject = mapObject(originalObject, (value) => value.toString());

console.log(mappedObject);
