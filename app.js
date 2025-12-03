
        function checkNumber() {
            const inputField = document.getElementById('numberInput');
            const resultDiv = document.getElementById('result');
            const num = inputField.value;
            resultDiv.textContent = '';
            if (num === '' || isNaN(num) || num <= 0 || !Number.isInteger(Number(num))) {
                resultDiv.textContent = 'Invalid input. Please enter a positive integer.';
                return;
            }

            const numberValue = parseInt(num);
            if (numberValue % 2 === 0) {
                resultDiv.textContent = `The number ${numberValue} is EVEN.`;
            } else {
                resultDiv.textContent = `The number ${numberValue} is ODD.`;
            }
        }