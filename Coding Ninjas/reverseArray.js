function reverseArray(arr) {
    const length = arr.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }

    return arr;
}

//Example of reversing the array
const inputArray = [2, -5, 6, 5, -8, 7, 5, 4, 6];
const reversedArray = reverseArray(inputArray);
console.log(reversedArray); // Output: [6, 4, 5, 7, -8, 5, 6, -5, 2]
