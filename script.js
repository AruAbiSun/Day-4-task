//1.Print odd numbers in an array
//anonymous:
function odd (array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
            
        }
    }
}
odd([1,2,3,4,5,6])
//IIFE
(function odd (array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
            
        }
    }
})([1,2,3,4])
//arrow function
odd =(array)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
            
        }
    }
}
odd([1,2,3,4,5,6,7])

//2.Convert all the strings to title caps in a string array
//anonymous function
function string (str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '))
    return str.join(' ');
  }
  string ("ARUNA IS MY NAME")
  // IIFE
(function string (str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '))
    return str.join(' ');
  })("ARUNA IS MY NAME")
  // arrow functions
  string = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '))
    return str.join(' ');
  }
  string ("ARUNA IS MY NAME")
  //3.Sum of all numbers in an array
//anonymous
function num (array) {
    let sum =0
    for(i=0; i<array.length; i++)
    sum=sum+array[i]
console.log(sum)
return sum
}
num([1,2,3])
//IIFE
(function num (array) {
    let sum =0
    for(i=0; i<array.length; i++)
    sum=sum+array[i]
console.log(sum)
return sum
})([1,2,3])
//arrow function
num=(array)=> {
    let sum =0
    for(i=0; i<array.length; i++)
    sum=sum+array[i]
console.log(sum)
return sum
}
num([1,2,3])
//4.Return all the prime numbers in an array
//anonymous
function prime (numArray){
    numArray = numArray.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
prime([1,2,3,4,5,6,8])
//IIFE
(function prime (numArray){
    numArray = numArray.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
})([1,2,3,4,5,6,8])
//arrow function
 prime =(numArray)=> {
    numArray = numArray.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
prime([1,2,3,4,5,6,8])
//5.Return all the palindromes in an array
function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }
    //anonymous
function polin (arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
            console.log(isPalindrome)
                return false;
        }
        return true;
    }
    polin ([1,2,3,4],4)
    //IIFE
     (  function (arr, n)
        {
            // Traversing each element of the array
            // and check if it is palindrome or not
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3)
        //arrow function
        Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
//6.Remove duplicates from an array
 //Anonymous 
 function dublicate (array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
  dublicate([1,2,3,3,4])
//IIFE :                
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])
//7.Rotate an array by K times
function reverse(array , li , ri){
 while(li < ri){
      int temp = a[li];
      a[li]= a[ri];
      a[ri] = temp;
      
      li++;
      ri--;
    }
}
//anonymous   
function rotate (array , k){
    k = k % a.length;
    if(k < 0){
    k += a.length;
    }
    reverse(a, 0, a.length - k - 1);
    reverse(a, a.length - k, a.length - 1);
    reverse(a, 0, a.length - 1);
    }
    rotate([1,2,3,4],2)
//IIFE    
(function(array , k){
    k = k % a.length;
    if(k < 0){
     k += a.length;
    }
    reverse(a, 0, a.length - k - 1);
    reverse(a, a.length - k, a.length - 1);
    reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)
//8.Return median of two sorted arrays of the same size.
//anonymous
function findMedian (arr1, arr2)  {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
  
    if (length % 2 === 0) {
      // If the length is even, return the average of the two middle elements
      let a=(mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
      console.log(a)
      return a
    } else {
      // If the length is odd, return the middle element
      let b= mergedArray[Math.floor(length / 2)];
      console.log(b)
      return b
    }
  };
  findMedian([1,2,3],[3,4,5])
  //IIFE
  (function findMedian (arr1, arr2)  {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
  
    if (length % 2 === 0) {
      // If the length is even, return the average of the two middle elements
      let a=(mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
      console.log(a)
      return a
    } else {
      // If the length is odd, return the middle element
      let b= mergedArray[Math.floor(length / 2)]
      console.log(b)
      return b
    }
  })([1,2,3],[3,4,5])
                          
   
