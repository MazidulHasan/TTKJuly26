function palindrom(str) {
    let reverseString  = str.split('').reverse().join('')
    return str === reverseString
}

// two pointer approach
function manualPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left != right) {
        if (str[left] != str[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

console.log(palindrom("amadam"));
console.log(manualPalindrome("amadam"));
