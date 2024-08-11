
var bubbleSort = (arr) => {
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < (arr.length - i - 1); j++){
            if(arr[j] > arr[j + 1]){
                var lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        
        }
    }
    return arr;
}

arr = bubbleSort([40,1,9,0,4,5,16, 44,1,95,10,42,5,6]);
console.dir(arr)