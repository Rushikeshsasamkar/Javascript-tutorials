function findPairsAndDouble(arr, target) {
    const pairs = [];
    const seenNumbers = new Set();

    for (let num of arr) {
        const complement = target - num;

        if (seenNumbers.has(complement)) {
            pairs.push([num, complement]);
        }

        seenNumbers.add(num);
    }

    const mergedArray = arr.concat(...pairs).sort((a, b) => a - b);

    const doubledTarget = target * 2;
    const combinations = [];

    for (let i = 0; i < mergedArray.length; i++) {
        for (let j = i + 1; j < mergedArray.length; j++) {
            if (mergedArray[i] + mergedArray[j] === doubledTarget) {
                combinations.push([mergedArray[i], mergedArray[j]]);
            }
        }
    }

    return { pairs, mergedArray, doubledTargetCombinations: combinations };
}

// Example: Test with an array and target value
const arrayToCheck = [1, 7, 3, 9, 5, 2, 8, 6];
const targetValue = 10;

const result = findPairsAndDouble(arrayToCheck, targetValue);
console.log("Pairs:", result.pairs);
console.log("Merged and Sorted Array:", result.mergedArray);
console.log("Doubled Target Combinations:", result.doubledTargetCombinations);
