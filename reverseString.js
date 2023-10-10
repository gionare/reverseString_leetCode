function reverseString (string) {
    let stringArray = string.split(''); // convert string to an array of characters

    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        [stringArray[left], stringArray[right]] = [stringArray[right], stringArray[left]];
        left++;
        right--;
    }

    let reversedString = stringArray.join(''); // return back to string
    return reversedString;
};
console.log(reverseString("George"));