// Define the type for the function that we want to wrap
type Func = (...args: any[]) => any;

// Logger wrapper function
const loggerWrapper = (fn: Func): Func => {
  return (...args: any[]): any => {
    console.log(`Calling function ${fn.name} with arguments: ${args.join(', ')}`);
    return fn(...args);
  };
};

// Original add function
const add = (a: number, b: number): number => a + b;

// Wrap the add function with loggerWrapper
const loggedAdd = loggerWrapper(add);

// Call the wrapped function
const value = loggedAdd(3, 5); // Should log: "Calling function add with arguments: 3, 5" and give output

console.log(value); // Output: 8
