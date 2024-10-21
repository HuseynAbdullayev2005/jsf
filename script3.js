1.
// function findSmallest(arr) {
//     let kicik = arr[0];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] < kicik) {
//             kicik = arr[i];
//         }
//     }
//     console.log(kicik);

// }

//  const arr2 = [2,3,1,4,6,5]
// let x = findSmallest(arr2)


2
// function findEven(arr,newArr) {

//     for (i = 0; i < arr.length; i++) {
//        if (arr[i]%2===0) {
//         newArr.push(arr[i]);
//        }
//     }
//     console.log(newArr);

// }

//  const arr2 = [2,3,1,4,6,5]
//  const teze = []
// let x = findEven(arr2,teze)


3
// function swapSmallAndBig(arr) {
//   let max = 0
//   let min = 0

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[max]) {
//             max = i;
//         }
//         if (arr[i] < arr[min]) {
//             min = i;
//         }
//     }
//     c = arr[max];
//     arr[max] = arr[min];
//     arr[min] = c;
//     return arr;


// }
// const arr2 = [2, 3, 1, 4, 6, 5]

// let x = swapSmallAndBig(arr2);
// console.log(x);


4






5
function stringReverse(string) {
    let c = ""
    for (i = string.length; i >= 0; i--) {
        c += string[i]
    }
    return c
}

let newString = "Flowers";
let x = stringReverse(newString)
console.log(x);

6
// function withoutSpace(sentences) {
//     let c = ""
//     for(i=0;i<sentences.length;i++){
//         if (sentences[i]!=" ") {
//             c+= sentences[i];
//         }

//     }
//     return c;

// }
// let cumle = "salam aleykum Allah seni qorsan"
// let x = withoutSpace(cumle);
// console.log(x);



7
// function sheeps(arr) {
//     let c = " "
//     for (i = 1; i < arr.length; i++) {
//         c += i+arr[i] + "..."
//     }
//     return c;
// }
// const arr2 = ["sheep", "sheep", "sheep", "sheep"]
// let x = sheeps(arr2);
// console.log(x);



8
// function repeat(string,num){
//   let c = ""
//     for(let i=0;i<num;i++){
//         c += string
//     }
//     return c;
// }

// let x = repeat("salam",4)
// console.log(x);



