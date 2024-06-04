type Reverse<T> = T extends [...infer H, infer T] ? [T, ...Reverse<H>] : [];

//[1,2,3] 
//H=[1,2],    //T:[3]

type MyTuple = [string, number, boolean];
type ReversedTuple = Reverse<MyTuple>;
