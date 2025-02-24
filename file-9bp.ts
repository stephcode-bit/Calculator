import Calculator from './Calculator';

const calculator = new Calculator();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askOperation() {
    readline.question(
        'Choose operation (+, -, *, /) or type "exit" to quit: ',
        (operation: string) => {
            if (operation.toLowerCase() === 'exit') {
                console.log('Exiting the calculator.');
                readline.close();
                return;
            }

            readline.question('Enter first number: ', (firstInput: string) => {
                const a = parseFloat(firstInput);
                if (isNaN(a)) {
                    console.log('Invalid number. Please try again.');
                    askOperation();
                    return;
                }

                readline.question('Enter second number: ', (secondInput: string) => {
                    const b = parseFloat(secondInput);
                    if (isNaN(b)) {
                        console.log('Invalid number. Please try again.');
                        askOperation();
                        return;
                    }

                    try {
                        let result: number;
                        switch (operation) {
                            case '+':
                                result = calculator.add(a, b);
                                break;
                            case '-':
                                result = calculator.subtract(a, b);
                                break;
                            case '*':
                                result = calculator.multiply(a, b);
                                break;
                            case '/':
                                result = calculator.divide(a, b);
                                break;
                            default:
                                console.log('Invalid operation. Please try again.');
                                askOperation();
                                return;
                        }
                        console.log(`The result is: ${result}`);
                    } catch (error) {
                        console.log(error.message);
                    }
                    askOperation();
                });
            });
        }
    );
}

askOperation();