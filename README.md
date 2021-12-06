# ODIN_calculator



### Functions:
- add(num1, num2)
- subtract(num1, num2)
- multiply(num1, num2)
- divide(num1, num2)
- operate(operator, number1, number2)  
- equal ()

- display

### HTML UI:
- pad of buttons with all numbers,
- keys for operators and equal
- field that displays the operation
- clear button

### Notes:
- operations only between 2 numbers at each time
- can chain operations
- the result of the previous operation is the first number of the next operation

### Event listeners:
- buttons 'numbers'
- button 'operator'
- button 'equal'
- button 'clear'

### main variables:
- num1
- num2
- operator
- result
- display


### Example of use:
0. initial
    - num1=num2=operator=result=display=empty

1. press '4' => 
    - num1=num2=operator=result=empty
    - display='4'

2. press '3' => 
    - num1=num2=operator=result=empty
    - display='43'

3. press '+' =>
    - num1=43
    - operator=add
    - num2=result=empty
    - display='43 +'

4. press '2' => 
    - num1=43
    - operator=add
    - num2=result=empty
    - display='43 + 2'

5. press '3' => 
    - num1=43
    - operator=add
    - num2=result=empty   
    - display='43 + 23'

    <!-- case A: equal -->
6A. press '=' => 
    - num1=43
    - num2=32
    - operator=empty
    - result=add(43,32)=75
    - display='43 + 32 = 75'
    //
    - num1=num2=operator=result=empty


    <!-- case B: chaining -->
6B. press '*' => 
    - num1=43
    - num2=32
    - operator=add
    - result=add(43,32)=75
    //
    - num1=result=75
    - num2=empty
    - operator=multiply
    - result=empty
    - display='43 + 32 *'
7B. repeat 4,5,6



