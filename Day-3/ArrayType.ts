// ----------TypeScript Arrays ---------------------

const names: string[] =[];
names.push("akash")
names.push("3")

console.log(names);

const stringArr2: string[] = ["Hello", "how", "are", "you"];          // normal way
const mixedData2: (string | number | boolean )[] = ["bye", true, 77];  // in array we give un-order type

// const myTuple: [string,  boolean, number] = ["hello", 143, false];     // in tuple we must give order way types