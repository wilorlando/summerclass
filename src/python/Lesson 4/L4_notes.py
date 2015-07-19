#PYTHON LESSON FOUR NOTES
#AR-MAC-GEDDON EDITION

#Range Function
## One of Python's built-in functions. Goes through a range of numbers.
## Example

range(1,6)

### 1 is the starting value and 6 is the "ending" value. Kinda. It will never return that ending value, only the value before it. So this returns numbers 1 to 5.
## When providing the range function with three numbers, the third value is taken as an increment. Example:

range(1, 10, 2)

### This returns every other number between 1 and 10. More specifically: 1, 3, 5, 7, and 9. Why? Because there's an increment of 2.
## Increments can be used to create a list of descending values as well

range(5, 0, -1)

### Returns 5, 4, 3, 2, 1.


#Loops
## While Loops
### Similar to if statements, except for one thing.
#### In while loops, the code runs over and over until the condition becomes false.
#### In if statements, the code only runs once.
### Format (< and > don't appear in real code):

#### while <condition>:
####        <statements>

### Example:

number = 1
while number <= 5:
         print number
         number = number + 1
print "goodbye!"

#### This program will print 1, 2, 3, 4, 5, and then "goodbye!"
### Beware of infinite loops. Always provide a way for the condition to equal false, so that it (eventually) breaks out of the loop.
## For Loops
### Format

#### for <variable> in <sequence>:
####       <statements>

### Example

for digit in range(1, 6):
         print digit

#### Returns a list of values from 1 to 5.

#Loop Extras
## You can nest loops (put loops inside of other loops), like if statements
## You can write compound conditions with while-loop-conditions, like if statements
## Break Statement
### You can put the word 'break' at any point during your loop to stop at that exact point and exit the loop
### Example:

for integer in range(1, 11):
         if integer == 4:
                   break
         print integer
print "Thanks!"

#### Returns 1, 2, 3, and "Thanks!"
## Continue Statement
### Allows you to kip the remaining stateents in your loop and start a new one
### Example

for thing in range(1, 11):
         if thing == 4:
                   continue
         print thing
print "Thanks!"

#### Returns 1, 2, 3, 5, 6, 7, 8, 9, 10, and "Thanks!" (Because continue skipped 'print thing' when thing == 4)
## Else Clause
### Extra statement on the end of a loop that only runs if a loop exits 'normally' ('normally' meaning 'without use of the break statement)
### Example

for ding in range(1, 11):
         if ding == 4:
                   continue
         print ding
else:
         print "Exited normally"

#### Returns 1, 2, 3, 5, 6, 7, 8, 9, 10, and "Exited normally"
### "Why would I ever use this?"

phrase = raw_input("Enter a phrase: ")
letter = raw_input("Enter a letter: ")
length = len(phrase)
for index in range(0, length):
         if phrase [index] == letter:
                   break
else:
         print "Your letter wasn't found"

### There. That's a good example. Woo.
