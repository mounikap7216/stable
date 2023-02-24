// Question - 1 , 
//Time Complexity : O(NlogN)
const { assert } = require("console");

//Test the given sample data
testSampleTest();
//Test if array contains multiple duplicates
testDuplicates();

//arr : list of integers
//k : target number
//return : distinct pairs sum to match target number
function getDistinctPairsTargetMatch(arr, targetValue) {
    let distinctPairs = 0;
    //sort array so that we can find the pair navigation from first and last
    arr.sort(function (a, b) { return a - b });
    let left = 0;
    let right = arr.length - 1;
    //if left index is less than right index
    while (left < right) {
        if (arr[right] + arr[left] == targetValue) {  //if find distinct pair
            distinctPairs++;
            left++;
            right--;
            
        } else if (arr[right] + arr[left] < targetValue) // if pair sum is less than target
            left++;
        else // arr[right] - arr[left] < targetValue
            right--;
    }
    return distinctPairs;
}

// Test case - 1
function testSampleTest() {
    let array = [5, 7, 9, 13, 11, 6, 6, 3, 3];
    let targetValue = 12;
    let distinctParis = getDistinctPairsTargetMatch(array, targetValue);
    console.assert(distinctParis == 3, "not ");
    console.log(distinctParis);
}
// Test case - 2

function testDuplicates() {
    let array = [5, 7, 5, 7, 11, 6, 6, 9, 3];
    let targetValue = 12;
    let distinctParis = getDistinctPairsTargetMatch(array, targetValue);
    console.assert(distinctParis == 4, "Failed");
    console.log(distinctParis);
}

