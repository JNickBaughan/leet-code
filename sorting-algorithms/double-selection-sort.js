var doubleSelectionSort = (arr) => {
    var startingIndex = 0;
    var endingIndex = arr.length - 1;
    while (startingIndex < endingIndex) {

        var highestValue = arr[endingIndex];
        var lowestValue  =  arr[startingIndex];
        var lowestIndex = startingIndex;
        var highestIndex = endingIndex;
        if(highestValue < lowestValue){
            var lesser = highestValue;
            arr[endingIndex]  = arr[startingIndex]
            arr[startingIndex] = lesser;
            lowestValue = highestValue;
            highestValue = lesser;
        }
        

    
        for (i = startingIndex + 1; i < endingIndex; i++) {
            var currentValue = arr[i]
            if(currentValue > highestValue && currentValue < lowestValue){
                var test = highestValue
            }else{
                if(currentValue > highestValue){
                    highestIndex = i;
                    highestValue = currentValue;
                }

                if(currentValue < lowestValue){
                    lowestIndex = i;
                    lowestValue = currentValue;
                }
            }
        }
        if(startingIndex !== lowestIndex){
            var lesser = arr[lowestIndex];
            arr[lowestIndex] = arr[startingIndex];
            arr[startingIndex] = lesser;
        }
        if(endingIndex !== highestIndex){
            var greater = arr[highestIndex];
            arr[highestIndex] = arr[endingIndex];
            arr[endingIndex] = greater;
        }
        startingIndex++;
        endingIndex--;
    }
    console.log(arr);
  };
  
  //doubleSelectionSort([34, 5, 10, 55, 7, 9, 42]);

  doubleSelectionSort([1, 34, 55, 5, 42, 49, 10, 78, 55, 78, 100, 7, 7, 9, 42, 1, 105, 5]);


  //doubleSelectionSort([1, 34, 55, 5, 42, 49, 14, 10, 78, 55, 78, 100, 7, 17, 9, 42, 7, 1, 105, 5]);