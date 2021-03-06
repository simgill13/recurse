// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  if (exponent == 0) return 1;
  let count = exponent;
  let baseval = base;
  let sum;
  let recurse = value => {
    if (count == 1) return;
    sum = value * baseval;
    count--;
    recurse(sum);
  };
  recurse(base);
  console.log(sum);
  return sum;
}

// power(2,4)

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(base) {
  if (!base) return 1;
  if (base === 1) return 1;
  let start = base;
  let count = base; //7
  let sum;
  let recurse = value => {
    if (count === 1) return;
    count--;
    sum = value * count;
    recurse(sum);
  };
  recurse(base);
  console.log(sum);
  return sum;
}

// factorial(7);

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arry) {
  let ary = arry;
  let sum;
  let recurse = ary => {
    if (ary.length < 2) return;
    sum = ary[0] * ary[1];
    ary.splice(0, 2);
    ary.splice(0, 0, sum);
    recurse(ary);
  };
  recurse(arry);
  console.log("final", sum);
  return sum;
}
// productOfArray([1,2,3,10])

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(val) {
  let base = val;
  let sum = 0;
  let recurse = () => {
    if (base == 0) return;
    sum += base;
    base--;
    recurse(base);
  };
  recurse(base);

  console.log("final", sum);
  return sum;
}

// recursiveRange(10);

function reverse(word) {
  let arry = word.split("");
  return arry.reverse().join("");
}

// reverse('awesome')

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string) {
  // add whatever parameters you deem necessary - good luck!
  let ary = string.split("");
  let back = [];
  // console.log(ary.length)
  for (let i = ary.length - 1; i >= 0; i--) {
    back.push(ary[i]);
  }
  console.log(ary);
  console.log(back);
  let forward = JSON.stringify(ary);
  let backward = JSON.stringify(back);
  if (forward === backward) {
    return true;
  } else {
    return false;
  }
}

// isPalindrome('tacocat')

// SAMPLE INPUT / OUTPUT

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
const isOdd = val => val % 2 !== 0;

function someRecursive(arry, callback) {
  if (arry.length == 0) return false;
  let val = arry[0];
  let odd = callback(val);
  arry.splice(0, 1);
  if (odd) {
    return true;
  } else {
    return someRecursive(arry, callback);
  }
}

// console.log(someRecursive([4,6,8], isOdd)); //true

function flatten(arry) {
  let empty = [];

  let recurse = ary => {
    if (ary.length === 0) return;

    for (let i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        recurse(ary[i]);
      } else {
        empty.push(ary[i]);
      }
    }
  };
  recurse(arry);
  return empty;
}

// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function capitalizeFirst(array) {
  let empty = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    let arry = word.split("");
    arry.splice(0, 1, word[0].toUpperCase());
    empty.push(arry.join(""));
  }

  console.log(empty);
  return empty;
}
// capitalizeFirst(["car", "taco", "banana"]);

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function nestedEvenSum(obj) {
  let sum = 0;
  let recurse = o => {
    if (Object.keys(o).length === 0) return;
    for (key in o) {
      let val = o[key];
      if (typeof o[key] == "object") {
        recurse(val);
      } else {
        if (typeof val === "number") {
          let odd = isOdd(val);
          if (!odd) {
            sum += val;
          }
        }
      }
    }
  };
  recurse(obj);
  console.log(sum);
  return sum;
}

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// };

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" }
// };

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

function capitalizedWords(words) {
  let base = words;
  let empty = [];
  let recurse = arry => {
    if (arry.length === 0) return;
    empty.push(base[0].toUpperCase());
    base.splice(0, 1);
    recurse(base);
  };
  recurse(base);
  console.log(empty);
  return empty;
}

let words = ["i", "am", "learning", "recursion"];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

let stringobj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

// stringifyNumbers(obj)

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

function stringifyNumbers(obj) {
  let base = Object.assign({}, obj);

  let recurse = o => {
    if (Object.keys(o).length === 0) return;
    let k;
    for (k in o) {
      let val = o[k];
      if (typeof o[k] == "object") {
        recurse(val);
      } else {
        if (typeof val === "number") {
          o[k] = val.toString();
        }
      }
    }
  };
  recurse(base);
  console.log(base);
  return base;
}

// stringifyNumbers(stringobj);
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

function collectStrings(obj) {
  let empty = [];
  let recurse = o => {
    if (Object.keys(o).length === 0) return;
    for (key in o) {
      let val = o[key];
      if (typeof o[key] == "object") {
        recurse(val);
      } else {
        empty.push(val);
      }
    }
  };
  recurse(obj);
  console.log(empty);
  return empty;
}

// collectStrings(obj); // ["foo", "bar", "baz"])

function linearSearch(arry, number) {
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] == number) return i;
  }
  return -1;
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15));

function binarySearch(arry, val) {
  console.log('hit')
  arry.sort(function(a, b) {
    return a - b;
  });

  let start = 0;
  let end = arry.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arry[middle] !== val) {
    if (val < arry[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
     middle = Math.floor((start + end) / 2);
  }

  return middle;
}

console.log("final ", binarySearch([1, 2, 3, 4, 5, 6, 9, 8, 7], 7));
