// Function to check if a given character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Function to get the precedence of an operator
function getPrecedence(operator) {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}

// Function to convert infix expression to prefix expression
function infixToPrefix(infixExpression) {
    let output = [];
    let operators = [];

    // Function to push operators to the stack
    function pushOperator(operator) {
        while (
            operators.length > 0 &&
            getPrecedence(operator) <= getPrecedence(operators[operators.length - 1])
        ) {
            output.push(operators.pop());
        }
        operators.push(operator);
    }

    // Iterate through each character in the infix expression
    for (let i = 0; i < infixExpression.length; i++) {
        let char = infixExpression[i];

        // If the character is an operand, push it to the output
        if (!isOperator(char) && char !== ' ') {
            output.push(char);
        } else if (isOperator(char)) {
            // If the character is an operator, push it to the operator stack
            pushOperator(char);
        }
    }

    // Pop any remaining operators from the stack to the output
    while (operators.length > 0) {
        output.push(operators.pop());
    }

    // Reverse the output to get the final prefix expression
    return output.reverse().join('');
}

// Example usage
const infixExpression = "1 + 2 * 3";
const prefixExpression = infixToPrefix(infixExpression);
console.log(`Infix Expression: ${infixExpression}`);
console.log(`Prefix Expression: ${prefixExpression}`);
