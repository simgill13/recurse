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



function reverse(word){
  let arry = word.split('');
  return arry.reverse().join('')
}

// reverse('awesome')

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'



// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string){
  // add whatever parameters you deem necessary - good luck!
  let ary = string.split('');
  let back = []
  // console.log(ary.length)
    for(let i = ary.length -1; i >= 0 ; i--){
      
      back.push(ary[i])
    }
console.log(ary)
console.log(back)
  let forward = JSON.stringify(ary);
  let backward = JSON.stringify(back);
  if(forward === backward){
    return true
  }else{
    return false
  }


}

// isPalindrome('tacocat')







// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arry,callback){
  // add whatever parameters you deem necessary - good luck!
}