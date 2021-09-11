// Then this code will run next
// for(let i=0; i<5 ; i++)
// {
//     // Two arguments the output and how much overlay to print
//     setTimeout(()=>{
//         console.log(i);
//     }, i * 2000);
// }

// This code will be executed first 
// because this loop will not need 
// a time while running
// for(let i=0; i<5 ; i++)
// {
//     console.log(i);
// }

// let b = 1;
// b ++;
// console.log(b);
// function outer()
// {
    
//     var b=3;
//     console.log(b);
//     function inner()
//     {
//         let b =4;
//         b++; //3
//          //3
//         console.log(b); //3
//     }
//     inner();
// }
// outer();

// Error already x is declared
// let x=10;
// let x=20;
// console.log(x);

// Will print 20
// var x=10;
// var x=20;
// console.log(x);

// let car={
//     carName:"BM"
//     ,carPrice:100000
// }
// console.log(car instanceof Object); //true
// // 0: (2) ['carName', 'BM'] index number and content
// // 1: (2) ['carPrice', 100000] index number and content
// // length: 2 array length
// console.log(Object.entries(car)); 

// function reverseArray(arr)
// {
//     return arr.reverse();
// }
// console.log(reverseArray([1,2,3,4,5]));

// function revArray (arr)
// {
//     let result = [];    
//     for(let i=arr.length-1; i>-1 ; i--)
//     {
//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(revArray([1,2,3,4,5]));

// function reverse(arr)
// {
//     let res = [];
//     // arrow function
//     arr.forEach(val => res.unshift(val));
//     // for(let val of arr)
//     // {
//     //     // Btdef fe awl el array w tshafit el val el 2dema 
//     //     // w to7t el val el gededa fe awl el array
//     //     res.unshift(val);
//     // }
//     return res;
// }
// console.log(reverse([5,2,3,4]));

// function reverArr(arr)
// {
//     let newarr = [];
//     // arrow function
//     arr.forEach(elment => {newarr.unshift(elment)});
//     return newarr;
// }
// console.log(reverArr([5,4,6,8]));