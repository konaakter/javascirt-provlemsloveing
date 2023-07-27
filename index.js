//Task 1 
function reverseString(input) {
    let reversedString = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reversedString += input[i];
    }
    return reversedString;
  }
  
  const inputString = "hello world";
  const reversedOutput = reverseString(inputString);
  //console.log(reversedOutput); 
  
  //Task 2
  function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  const inputArray = [2, -5, 10, -3, 7];
  const outputSum = sumOfPositiveNumbers(inputArray);
  //console.log(outputSum);
  
  //Task 3
  
  function findMostFrequentElement(arr) {
    const frequencyMap = {};
  
    
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    let mostFrequentElement;
    let highestFrequency = 0;
    for (const num in frequencyMap) {
      if (frequencyMap[num] > highestFrequency) {
        mostFrequentElement = Number(num);
        highestFrequency = frequencyMap[num];
      }
    }
  
    return mostFrequentElement;
  }
  
  const input = [ 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequent = findMostFrequentElement(input);
  //console.log(mostFrequent); 
  
  //task 4
  
  function findTwoNumbersWithSum(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
  
    while (left < right) {
      const sum = sortedArr[left] + sortedArr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null;
  }
  
  const sortedArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const result = findTwoNumbersWithSum(sortedArray, targetValue);
  //console.log(result); 
  
  //task 5
  
  function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Cannot divide by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  const number1 = 10;
  const operator = '+';
  const number2 = 5;
  
  const resultcalculator = calculator(number1, operator, number2);
  //console.log(result);
  
  //task 6
  
  function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_+=<>?';
  
    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  
  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
  //console.log(randomPassword);
  
  //task 7
  
  function romanToInt(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentNumeral = romanNumerals[roman[i]];
      const nextNumeral = romanNumerals[roman[i + 1]];
  
      if (nextNumeral && currentNumeral < nextNumeral) {
        result -= currentNumeral;
      } else {
        result += currentNumeral;
      }
    }
  
    return result;
  }
  
  const romanNumeral = "XXI";
  const intValue = romanToInt(romanNumeral);
  //console.log(intValue);
  
  //task 8
  
  function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest;
  }
  
  const numbers = [5, 2, 9, 1, 7, 3];
  const secondSmallestNumber = findSecondSmallest(numbers);
  //console.log(secondSmallestNumber);