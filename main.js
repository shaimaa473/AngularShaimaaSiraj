/// Q3 ///
// 1- console.log(typeof typeof 1); 
// 1- Answer will return string = type of "number" is string
// 2- What is NaN? What is its type? How can you reliably 
// test if a value is equal to NaN
// 2- Answer : it is a variable in global scope.The initial value of NaN is Not-A-Number
// numeric data type 
// 
// function testNan(x : any) {
//     if (isNaN(x)) {
//       return NaN;
//     }
//     return x;
//   }
//   in case not a nan will return the number
//   console.log(testNan('20'));
//   console.log(testNan('Argument is not a number'));
// 3- Answer The event loop is the secret behind JavaScript’s
//  asynchronous programming. JS executes all operations on 
// a single thread, but using a few smart data structures, 
// it gives us the illusion of multi-threading. 
// Let’s take a look at what happens on the back-end.
// 4- Explain without detail 
// what is the polymorphism is and 
// what its benefits are ?
// 4- Answer : write a single function that handles many data-types 
// Q4- //
// - Show the execution of 3 asynchronous 
// block of code, one after the 
// other in sequence 
// Q4- 2-
// console.log("First run")
// setTimeout(function()
// {
//     console.log("Third run")
// },2000)
// console.log("Secound run");
//Q4- 5- Get the maximum value from a numbers array along 
// with its index 
//5- Answer:
//  function getMax(array: number[]): any {
//     if (((array == null)||(array.length == 0))) {
//         return "No Numbers in the array";
//     }
//     let largest: number = 0;
//     for (let i: number = 0; (i < array.length); i++) {
//         if ((array[i] > array[largest])) {
//             largest = i;
//         }
//     }
//     return `The largest number in this array is ${array[largest]}`;
// }
// console.log(getMax([1,2,3,4,5]));
// Q4- 6-
// class Shape {
//     filled: boolean;
//     color: string;
//     public constructor () {
//         this.filled = true;
//         this.color = "red";
//     }
//     public getColor(): string {
//         return this.color;
//     }
//     public setColor(colorSet: string) {
//         this.color = colorSet;
//     }
//     public isFilled(): boolean {
//         if (this.filled === true){
//             return true;
//         } else {
//             return false;
//         }
//     }
//     public setFilled(filledSet: boolean) {
//         this.filled = filledSet;
//     }
// }
// class Circle extends Shape {
//     radius: number;
//     public circle() {
//         this.radius = 5;
//     }
//     public getRadius(): number {
//         return this.radius;
//     }
//     public setRadius(radius: number) {
//         this.radius = radius;
//     }
//     public getArea(): number {
//         return this.radius * this.radius * Math.PI;
//     }
//     public getPerimeter(): number {
//         return 2 * this.radius * Math.PI;
//     }
// }
// class Rectangle extends Shape {
//      width: number;
//      length: number;
//     public Rectangle() {
//             this.width = 50;
//             this.length = 60;
//     }
//     public getWidth(): number {
//         return this.width;
//     }
//     public setWidth(width: number) {
//         this.width = width;
//     }
//     public getLength(): number {
//         return this.length;
//     }
//     public setLength(length: number) {
//         this.length = length;
//     }
//     public getArea(): number {
//         return this.length * this.width;
//     }
//     public getPerimeter(): number {
//         return (2 * this.length) + (2 * this.width);
//     }
// }
// class Square extends Rectangle {
//     public getSide(): number {
//         return super.getWidth();
//     }
//     public setSide(side: number) {
//         super.setLength(side);
//         super.setWidth(side);
//     }
//     public getArea(): number {
//         return this.getSide() * this.getSide();
//     }
//     public getPerimeter(): number {
//         return 4 * this.getSide();
//     }
// }
// Q5- 1
