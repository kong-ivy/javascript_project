function removeWithoutCopy(arr, item) {
    i=0;
    while(i<arr.length){
        if(arr[i]===item){
            delete arr[i]
        }
        i++
    }
    return arr

removeWithoutCopy([1,2,2,3,4,2,2],2)