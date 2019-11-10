/*
 * @author: Berta Lázaro Ribé
 *
 * LANGUAGE MODULE EXERCISES
 */

// 1. Array operations
const array1 = [1, 2, 3, 4, 5];
const array2 = ["one", "two", "three", "four"];

/* Head */
const head = ([head]: any[]) => head;
console.log(`Result of head: ${head(array1)} - original array: ${array1}`);

/* Tail */
const tail = ([head, ...tail]: any[]) => tail;
console.log(`Result of tail: ${tail(array1)} - original array: ${array1}`);

/* Init */
const init = (array: any[]) => array.slice(0, -1);
console.log(`Result of init: ${init(array1)} - original array: ${array1}`);

/* Last */
const last = (array: any[]) => array.slice(-1);
console.log(`Result of last: ${last(array1)} - original array: ${array1}`);

//2. Concat

/* Concat */
const concat = (arrayA: any[], arrayB: any[]) => [...arrayA, ...arrayB];
console.log(
  `Result of concat: ${concat(
    array1,
    array2
  )} - original arrays: ${array1} -- ${array2}`
);

/* Multiple concat */
const array3 = [true, false];
const concatMultiple = (...arrays) =>
  arrays.reduce((acc, array) => [...acc, ...array]);
console.log(
  `Result of concatMultiple: ${concatMultiple(
    array1,
    array2,
    array3
  )} - original arrays: ${array1} -- ${array2} -- ${array3}`
);

// 3. Clone Merge
const object = { name: "Berta", surname: "Lazaro", age: "34" };

/* Clone */
const clone = source => ({ ...source });
const clonedObject = clone(object);
console.log(`cloned object: ${JSON.stringify(clonedObject)}`);
console.log(`object === clonedObject: ${object === clonedObject}`);

/* Merge */
const object2 = { name: "Lola", city: "Barcelona" };
const merge = (source, target) => ({ ...target, ...source });

console.log(`merged object: ${JSON.stringify(merge(object, object2))}`);

// 4. Read books

interface Book {
  title: string;
  isRead: boolean;
}
const isBookRead = (books: Book[], titleToSearch: string): boolean => {
  const book = books.find(book => book.title === titleToSearch);
  return Boolean(book) ? book.isRead : false;
};

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true }
];

console.log(`isRead 'Devastación': ${isBookRead(books, "Devastación")}`); // true
console.log(
  `isRead 'Canción de hielo y fuego': ${isBookRead(
    books,
    "Canción de hielo y fuego"
  )}`
); // false
console.log(
  `isRead 'Los Pilares de la Tierra': ${isBookRead(
    books,
    "Los Pilares de la Tierra"
  )}`
); // false

// 5. Slot machine
class SlotMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    if (this.spinWheel() && this.spinWheel() && this.spinWheel()) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time");
    }
  }

  spinWheel() {
    return Math.random() >= 0.5;
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
