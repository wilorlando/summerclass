#LESSON ELEVEN PYTHON NOTES
#80s ROAD SAFETY VIDEOS EDITION

#Exception Basics
## Definition
### An EXCEPTION is an error that occurs when the program is running (like if a string was entered for an input() prompt)
## Handling Exceptions
### Use TRY BLOCKS and EXCEPT BLOCKS to define a 'plan B' of sorts if the exception is encountered
### Format
try:
    <statements that may throw an exception>
except <Exception Type>:
    <statements to be run should the exception occur

### Example
try:
    age = input("Please enter your age: ")
    ten_years = age + 10
    print "In 10 years, you'll be", ten_years
except NameError:
    print "You must enter a number for your age."

print "Goodbye."

#### The 'except block' replaces the crazy error message a user will get otherwise, basically
#### 'NameError' is an exception that appears when Python encounters a variable name that it doesn't recognize
##### So, when you enter a string instead of a numeric age here, Python is actually checking through its list of variables for one with that name
##### It didn't find one, so the error message appeared.
##### Had you created such a variable and assigned it a numeric value, the problem would've run fine
###### Example

Fifteen = 15

try:
    age = input("Please enter your age: ")
    ten_years = age + 10
    print "In 10 years, you'll be", ten_years
except NameError:
    print "You must enter a number for your age."

print "Goodbye."

##### Here's another implication: What if you enter something that cannot be a variable name?
##### Python requires the first letter in variables to be a letter.
##### If you tried to enter '10ten', you get a new error: 'SyntaxError: unexpected EOF while parsing'
##### The SyntaxError wouldn't be caught by our excpetion block. Why? Because it's only set up to catch NameError exceptions.
##### To fix this, just replace 'except NameError' with 'except SyntaxError'. Right?
##### Well... Almost. It'll solve the SyntaxError, sure, but now there's nowhere for NameError to go.
##### If only there were a way to handle multiple exceptions... *cough* below *cough*








#More Advanced Exception Features
## Multiple Exceptions
### You can literally just add another exception block to the try block
### Example

try:
    age = input("Please enter your age: ")
    ten_years = age + 10
    print "In 10 years, you'll be", ten_years
except NameError:
    print "You must enter a number for your age"
except SyntaxError:
    print "You must enter a number for your age"

print "Have a nice day. Goodbye."

#### Now both exceptions can be caught. Woo.
### "But Wil!" you cry. "What if I've got a hundred lines of code that I want to execute for both exceptions?!"
### NEVER FEAR
### You can put the two exceptions together after except
### Example

try:
    age = input("Please enter your age: ")
    ten_years = age+10
    print "In 10 years, you'll be", ten_years
except (NameError, SyntaxError):
    print "You must enter a number for your age"

print "Have a nice day. Goodbye."

## Exception Hierarchy
### Exceptions are like (almost) everything else in Python: They're objects
### There are classes written for NameError, SyntaxError, etc
### They all inherit from (as in, they're all child class of) the Exception class
### "Wil, that's boring! How does this affect me?"
### SIT DOWN SON
### It means you can do THIS:

try:
    age = input("Please enter your age: ")
    ten_years = age + 10
    print "In 10 years, you'll be", ten_years
except Exception:
    print "You must enter a number for your age"

print "Have a nice day. Goodbye."

#### That example will handle ALL exceptions that could ever pop up
### "But Wil! What if I want to handle different exceptions different ways?!"
### STAY SEATED
### You can add more except blocks before Exception to handle the individual things
#### Note: Since "except Exception" is like the else-statement of except blocks, ALWAYS put it as the LAST except block (if you've got more than one). Otherwise your code will stop at Exception, no matter what exception was thrown, and ignore the except blocks below it
### Example

try:
    age = input("Please enter your age: ")
    ten_years = age + 10
    print "In 10 years, you'll be", ten_years
except NameError:
    print "A NameError has occurred"
except Exception:
    print "Something unexpected has happened"

print "Have a nice day. Goodbye."

#### This example is the BEST way to handle exceptions
#### The BEST
#### ...AROUND
#### ...NO ONE'S EVER GONNA KEEP IT DOWN









#Exception Arguments
## Remember, exceptions are objects. We can use that for more cool stuff.
## Example

try:
    mylist = [0, 1, 2]
    print my_list[42]
except IndexError, ie:
    print ie.message    # list index out of range

### In case that wasn't clear, Python describes that exception as 'list index out of range'
## Each exception is a little different
## As shown, some exceptions (like IndexError and NameError) contain a message property that give you a single line of text to describe what happened
## The IOError, on the other hand, gives you a variety of details
### Example

try:
    infile = open('C:\Documents and Settings\Mike\Desktop\myfile.txt', 'r')
    infile.write("hello")
except IOError, ioe:
    print ioe.filename
    print ioe.strerror

#### To get a complete list of all attributes of this IOError object, use 'dir()'
##### Example

dir(ioe)

## The point of using exception arguments in your code is to give a more personalized description of what happened to your user
## We could simply print the standard error message or customize it so it's friendlier. The choice is yours.








#The 'else' and 'finally' Blocks
## Remember when I said 'except Exception' was like the else-statement of except blocks?
## My confidence in that statement is dwindling
## Else Block
### The code in the else block will be executed if and only if no exception occurs while the program is running
### Example

try:
    user_num = input("Please enter a number: ")
    result = 10 / user_num
except (NameError, SyntaxError):
    print "The value you entered was not a number"
except ZeroDivisionError:
    print "You cannot divide by zero"
else:
    print "The result of dividing 10 by your number is', result

#### That make sense? The 'else' block is what happens when the user does what you want him to
#### "But Wil!" you cry once more. "I could've put that code in the try block! What's the point of using an else?!"
#### WORRY NOT
#### Imagine you want to keep track of the number of times your program runs without encountering any exceptions. For that, you'd have to use the else block.
#### There are probably more uses but the instructor only lists that one
#### Clearly the most useful tool in Python
#### Right behind semicolons and curly braces
#### Yep
## Finally Block
### As in FINALLY WE MADE IT TO THE LAST TOPIC
### Just kidding. This actually went pretty fast.
### The FINALLY BLOCK runs whether there's an exception or not
### Example

try:
    infile = open("data.txt", "r")
    try:
        value = infile.readline()
        number = int(value)
        print number
    finally:
        infile.close()
        print "The data file was closed"
except IOError, io:
    print "Could not open file"
except ValueError:
    print "Could not convert", value, "to a number"

g
#### This example opens a data file, reads in a line of data, converts that data to a number, the print that number to the screen
#### The finally block here closes the data file if an exception appears before the program can finish
##### For perspective: This is functionally the same as including 'infile.close()' and 'print "The data file was closed"' in every except block. Finally is neater.
