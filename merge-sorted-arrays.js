/**
 Do not return anything, modify nums1 in-place instead.
 https://leetcode.com/problems/merge-sorted-array/submissions/1327782234/?envType=study-plan-v2&envId=top-interview-150
 */
 function merge(nums1, m, nums2, n) {
    if(n === 0) return;
    var num1Index = 0;
    var nums1Copy = [...nums1];
    var num1CopyIndex = 0;
    var num1HighestIndex = m - 1;
    var num2Index = 0;
    var num2HighestIndex = n - 1;

    while(num1CopyIndex <= num1HighestIndex || num2Index <= num2HighestIndex){
        if(num1CopyIndex <= num1HighestIndex && num2Index > num2HighestIndex){
            var sliced = nums1Copy.slice(num1CopyIndex, m);
            for(var i = 0; i < sliced.length; i++){
                nums1[num1Index] = sliced[i];
                num1Index++;
            }
            num1CopyIndex = num1HighestIndex + 1;
            num2Index = num2HighestIndex + 1;
        }else if(num1CopyIndex > num1HighestIndex && num2Index <= num2HighestIndex){
            var sliced2 = nums2.slice(num2Index, n);
            for(var i = 0; i < sliced2.length; i++){
                nums1[num1Index] = sliced2[i];
                num1Index++;
            }
            num1CopyIndex = num1HighestIndex + 1;
            num2Index = num2HighestIndex + 1;
        }else{
            if(nums1Copy[num1CopyIndex] > nums2[num2Index]){
                nums1[num1Index] = nums2[num2Index];
                num2Index++;
                num1Index++;
            }else if(nums1Copy[num1CopyIndex] < nums2[num2Index]){
                nums1[num1Index] = nums1Copy[num1CopyIndex];
                num1CopyIndex++;
                num1Index++;
            }else{
                
                nums1[num1Index] = nums1Copy[num1CopyIndex];
                num1Index++;
                nums1[num1Index] = nums2[num2Index];
                num1Index++;
                num1CopyIndex++;
                num2Index++;
            }
        }   
    }
};


//var numSet1 = [1,2,4,0,0,0];
var numSet1 = [1,2,3,0,0,0]
//var numSet2 = [5,7,9,0,0,0];
var numSet2 = [2,5,6]
merge(numSet1, 3, numSet2, 3);
console.dir(numSet1);