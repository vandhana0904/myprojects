    const array = [1,2,3,2,3,4,5,4,6,6,7,8,7,8,9];
    let a= array.sort();
    let arr = [...new Set(array)];
    console.log(` GIVEN ARRAY:${array}`);
    console.log(`SORTED ARRAY : ${a}`);
    console.log(`After removing duplicates from array: ${arr}`);
    

    for (let i=0; i<=15; i++) {
        if (i % 2 == 0) {
                console.log(i +  " is even");
        }
        else if (i % 2 != 0) {
                console.log(i + " is odd  ");   
        }
        else {
                console.log(i + " is even"); 
        }
}
