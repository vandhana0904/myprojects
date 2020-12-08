let arr = [1, 2, 3, 4, 5],
    sum = 0,
    product = 1,
    i;
for (i = 0; i < arr.length; i= i+1) 
   {
    sum += arr[i];
    product *= arr[i];
    }
console.log('Sum : '+sum );
console.log('Product :  ' +product); 