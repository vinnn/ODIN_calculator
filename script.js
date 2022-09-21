
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LINK TO HTML ELEMENTS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const numberPad = document.querySelector('.numberPad');

const prevCalc = document.getElementById('displayPreviousCalc');
const currOperator = document.getElementById('displayCurrentOperator');
const currNumber = document.getElementById('displayCurrentNumber');
const currResult = document.getElementById('displayCurrentResult');



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// SESSION
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// clear previous results
clearResults()
// setup the number pad
// setupNumberPad()
let number_btn = document.querySelectorAll(".btn-number");

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// event listeners - to be compacted later
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// click on number
number_btn.forEach( (numb) => {        
    numb.addEventListener("click", function( event ) {
        let new_number = event.target.textContent;

        // if this is the initial number (ie no operator yet) then write the new number directly in the prevCalc variable,
        if (currOperator.textContent == "") {
            prevCalc.textContent += new_number;
            let prevCalc_val = prevCalc.textContent;
            prevResult_val = prevCalc.textContent;

        // otherwise write in the current_number variable and update the current_result:
        } else {
            currNumber.textContent += new_number; 
            currNumber_val =  currNumber.textContent;  
            currOperator_val = currOperator.textContent;

            currResult_val = operate(currOperator_val, prevResult_val, currNumber_val);
            currResult.textContent = currResult_val;
        }
    })
})

        // click on operator
        let operator_btn = document.querySelectorAll(".btn-operator");
        operator_btn.forEach( (oper) => {        
            oper.addEventListener("click", function( event ) {

            // First, send the previous number and operator in the previous calc field adding parentheses around (only from second operator):
            if (currNumber.textContent !== "") {
                prevCalc_val = prevCalc.textContent;
                if (prevCalc_val.indexOf(" ") < 0) {
                    prevCalc_val = prevCalc_val + " " + currOperator_val + " " + currNumber_val;
                    prevCalc.textContent = prevCalc_val;
                } else {
                    prevCalc_val = "(" + prevCalc_val + ") " + currOperator_val + " " + currNumber_val;
                    prevCalc.textContent = prevCalc_val;
                }

                currNumber_val = "";
                currNumber.textContent = currNumber_val;

                // save the current result and the previous result:
                prevResult_val = currResult.textContent;
            }

            // Now update the current operator:
            currOperator.textContent = event.target.textContent;

            })
        })



// click on "CLEAR" button
let clear_btn = document.querySelector(".clear");
clear_btn.addEventListener("click", function( event ) {
    clearResults();

});



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// SETUP FUNCTIONS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // SETUP NUMBER PAD
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        function setupNumberPad() {
            for (let i=0; i<=9; i++) {
                const numb = document.createElement('button');
                numb.classList.add('btn-number');
                numb.textContent = i;
                numberPad.appendChild(numb);
                console.log(numb);
            }
        }

        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // CLEAR RESULT/DISPLAY
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        function clearResults() {
            prevCalc.textContent = "";
            currOperator.textContent = "";
            currNumber.textContent = "";
            currResult.textContent = "";
        }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// FUNCTIONS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // OPERATORS
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        function add(num1, num2) {
            return num1 + num2;
        };
        function subtract(num1, num2) {
            return num1 - num2;
        };
        function multiply(num1, num2) {
            return num1 * num2;
        };
        function divide(num1, num2) {
            return num1 / num2;
        };

        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // OPERATE
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        function operate(operator, n1, n2) {
            let num1 = Number(n1);
            let num2 = Number(n2);

            switch (operator) {
                case "+":
                    return add(num1, num2);
                case "-":
                    return subtract(num1, num2);
                case "*":
                    return multiply(num1, num2);
                case "/":
                    if (num2 == 0) {
                        alert("division by zero not allowed.");
                        clearResults();
                        break;
                    }
                    return divide(num1, num2);
            }

        };

















