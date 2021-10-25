export const myString: string = 'Hello world';
const myBoolean: boolean = Boolean('test');

// type IMyObject = {
//   firstName: string,
//   age: number
// }

interface IMyObject {
  firstName: string,
  age: number
}

const myObject: IMyObject = {
  firstName: 'Brian',
  age: 32,
}

interface IMyObject2 extends IMyObject {
  lastName: string,
  phoneNumber: string,
}

// type IMyObject2 = {
//   lastName: string,
//   phoneNumber: string,
// }


const myObject2: IMyObject2 = {
  firstName: 'Brian',
  age: 32,
  lastName: 'McGillan',
  phoneNumber: '+177777777',
}

const myArray: (null | string)[] = [];

const myArray2: Array<string | number | boolean> = ['string', 55, false];
const myArray3: [string, number, boolean] = ['string', 55, false];

const myFunction = (a: number, b: string): void => {
  console.log(a + b);
}


myFunction(5, '3');
const myFetchFunction = (): Promise<{ counter: number }> => new Promise(() => ({ counter: 7 }));

const getter = <T>(data: T): T => data;

const getterResult1 = getter(['string', 33])
