#PYTHON LESSON FIVE NOTES
#RUNNING OUT OF MAC PUNS EDITION

#Modular Programming
## Grouping and organizing code to keep it more manageable
## Code grouped into functions

#Functions
## A named group of Python statements that can be called on elsewhere
## Format (< and > should not appear in actual code)

### def <function name>(<parameter list>):
###     <documentation string>
###     <the function's code>

## 'def' stands for 'define'. Definitely.
## The PARAMETER LIST is a list of the variables that the function needs from the caller
## The DOCUMENTATION STRING (docstring for short) is just a singe line enclosed in three sets of double quotes that gives the purpose of the function
### Docstring example: """This function displays a welcome message"""
## Reminder again on function names in python; Examples: 'print_welcome' 'hello_world' 'awesome_super_function_'
## Example:

def change_value(value):
    """This function changes the value passed in to 1"""
    print "Inside, value is:", value
    value = 1
    print "Inside, value is changed to:", value

number = 5
print "Outside, number is:", number
change_value(number)
print "Outside, number is now:", number

### One thing to note is that 'value' is declared inside of the 'change_value' function
### Therefore, 'value' only exists inside the 'change_value' function
### If you tried to use 'value' elsewhere, you'd get an error message
### This is the variable's SCOPE. Essentially, the scope of a variable is where the variable is active in the program.
### If you wanted to access 'value' outside of that function, you'd have to make it a global variable
### The GLOBAL statement tells Python you're going to want to access and be able to modify a variable that isn't part of the current function
### Example:

def change_number():
    """This function changes the value passed in to 1 (global)"""
    global number
    number = 1

number = 5
print "Outside, number is:", number
change_number()
print "Outside, number is now:", number

### Swell.

#Returning Value from Functions
## Can return values with the keyword 'return'. Shocking, I know. Stay in your seat.
## Example:

def square(num):
    """This function calculates the square of a number"""
    result = num * num
    return result

## Easy.

#Functions Extras
## Default Arguments
### Used when you want to allow your funciton to be called with a fewer number of arguments than is required in a parameter list.
### Done by placing an equal sign and a value next to the variable in your parameter list
### Here's an example: If you want to allow your 'square' funciton (above) to be called without any number being specified. If this happens, it will return the square of 1.

def square(num = 1):
    """This function calculates the square of a number"""
    result = num * num
    return result

### If I were to then go:

print square()

### I'd get 1.
## Keyword Arguments
### Can be used to specify which variables in the function's parameter list should be storing which values
### Done in the statement than calls the function
### Example:

prompt_user(prompt="Hello")
prompt_user(num_tries=1, prompt="Hi")

### This allows us to specifically assign the function's variable to a value
### Side effect: You're allowed to call functions with the parameters out of ourder, as shown in the second line
