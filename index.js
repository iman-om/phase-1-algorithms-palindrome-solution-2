function isPalindrome(word) {
  const normalizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = normalizedWord.length - 1;

  while (left <= right) {
    if (normalizedWord[left] !== normalizedWord[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/* 
  Add your pseudocode here
  FUNCTION isPalindrome(word):
    normalizedWord = normalizeWord(word)
    left = 0
    right = length of normalizedWord - 1
  
    WHILE left is less than or equal to right:
      IF character at left in normalizedWord is not equal to character at right in normalizedWord:
        RETURN false
      INCREMENT left
      DECREMENT right
  
    RETURN true
  END FUNCTION
*/

/*
  Add written explanation of your solution here
  The isPalindrome function checks if a given word is a palindrome. It first normalizes the word by converting it to lowercase and removing non-alphanumeric characters. Then, it uses two pointers, left and right, to compare characters from the start and end of the normalized word towards the center. If at any point the characters are not equal, the function returns false. If the loop completes without returning false, the word is a palindrome and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;