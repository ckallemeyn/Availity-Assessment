/*
PROMPT:

Coding exercise: You are tasked to write a checker that validates the parentheses of a LISP code.  Write a program (in Java or JavaScript) which takes in a string as an input and returns true if all the parentheses in the string are properly closed and nested.
*/


/*
input: string of LISP chars
output: boolean
constraints: none
edge cases:
- what if the string doesn't include any type of bracket?
return false
- What if the string is empty?
return false
*/


const balancedParens = (input) => {
  // create a stack in which to hold the open bracket(s)
  let stack = [];
  let matchingBracket, char;
  let openBracketsArr = ['[', '{', '('];
  let closedBracketsArr = [']', '}', ')'];

  // edge cases
  if (input === '') {
    return false;
  }

  if (input.length < 2) {
    return false;
  }
  // iterate through the input string
  for (let i = 0; i < input.length; i++) {
    // if the character is a open bracket push it into the stack
    char = input[i];
    if (openBracketsArr.indexOf(char) > -1) {
      stack.push(char);
    }
      // if the character is a closing bracket then pop the opening bracket from the stack
    if (closedBracketsArr.indexOf(char) > -1) {
      matchingBracket = openBracketsArr;[closedBracketsArr.indexOf(char)];
      //  if the two brackets match then continue otherwise return false
      if (stack.length === 0 || (stack.pop() !== matchingBracket)) {
        return false;
      }
    }
  }
  //  if at the end of the iteration the stack is empty then return true.
  return (stack.length === 0);
};

/*
test cases:
balancedParens('[](){}'); // true
balancedParens('[(]{)}'); // false
balancedParens('[({})]');   // true
LISP example: balancedParens('(select (:title :author :year)
  (from :books)
  (where (:and (:>= :year 1995)
  (:< :year 2010)))
  (order-by (:desc :year)))
⇒ ((:title "Practical Common Lisp"
    :author "Peter Seibel"
    :year 2005)
    (:title "ANSI Common Lisp"
    :author "Paul Graham"
    :year 1995))'); // true
balancedParens(' var hubble = function() { telescopes.awesome();'); // false
*/