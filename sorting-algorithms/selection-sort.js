var selectionSort = (arr) => {
    for(i = 0; i < arr.length; i++){
        let minIndex = i;
        for(j = i + 1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let lesser = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

arr = selectionSort([40,1,9,0,4,5,16, 44,1,95,10,42,5,6]);
console.dir(arr)