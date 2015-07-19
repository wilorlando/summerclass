#Lesson 2 Notes

#Variables
## They don't have to be declared
###In C++:
### int distance;
### distance = 85;
### nxtDisplayBigTextString ("Distance", 2) [or something similar to print]
###In Python:
distance = 85
print distance
## Python variables can include most characters, and use underscores to denote a new word
banker_Tom_has_mad_cash = 500000
print banker_Tom_has_mad_cash
## Some "keywords" can't be used as variable names. Here they are:
import keyword
print keyword.kwlist
## Variables aren't categorized into ints and strings and stuff like C++
data = 4
data = -12.5554
data = "Wassup"
print data
## For the love of god, don't make numbers variables. Like:
### 1 = "Woohoo!"
### 1 is 1. 1 is not Woohoo. 1 is never Woohoo. Do this:
a = "Woohoo!"
### or maybe
celebration = "Woohoo!"
### or even
strangely_sarcastic_cheering = "Woohoo!"
##Python lets you declare multiple variables in the same line
x, y, z = "Wing", "Fly", "Bird"
print x
print y
print z

#Strings
## Denoted by quotes ("") or apostrophes ('') (double and single quotes?).
name = "Python"
name = 'Python'
## Both function exactly the same, but each recognizes that the other is different.
quote = "The woman said, 'Hello!'"
print quote
## Backslashes mark characters as "literally the thing I typed". Bad explanation. In:
quibble = "Watch as my \"rabbit\" dissapears from the \"hat\"!"
print quibble
## /t is used as a tab
text = "1\t2"
print text
## /n is used to create a new line
texter = "1\n2"
print texter

#User Input
## Two basic functions to get input from the user: "raw_input" and "input"
## raw_input is for strings
oak = raw_input("Are you a boy? Or are you a girl? ")
print oak #this prints your answer#
## input is only for numbers
pokes = input("How many Pokemon were in the original generation? ")
print pokes
### You'd get an error message for entering words here ("I don't know!")

#Error messages
## Read that shit.
## No, really. Do your best.
## Go on.
## Keep trying.
## Almost there.
## No?
## Google it. Maybe StackOverflow knows what's up.

#Numbers and Math
## Standard operators (+, -, *, /)
print 2 + 2
print 5 * 3
## Tricky: Result will take form of original operands. For example:
print 7 / 2
## 7 / 2 is 3.5. But you're using whole numbers, my friend. Python just returned 3.
### Other note: Python won't round. It'll truncate (remove everything after decimal).
## Decimal operands, on the other hand...
print 7.0 / 2.0
## Even one decimal operand will return a decimal number
print 7.0 / 2
print 7 / 2.0
## "Modulus" is another little operator represented by the percentage ("%")
## Modulus gives you the remainder of a division equation
print 7 % 2
## That returns 1. Why? 2 goes into 7 three times, with (you guessed it) 1 left over.
## Modulus is handy to determine whether an input is even or odd
## When divided by 2, even numbers have a remainder of 0, while odd numbers have a remainder of 1
## You can also do exponents! Here's 2^3.
print 2 ** 3

#Importing Libraries
## Barely touched on this, but I assume it works like a header (.h) file in RobotC
## The Python stuff already downloaded came with some libraries, one of which is mathy.
import math #name of the library#

print "The value of pi is"
print math.pi

print "Alternate exponent method?! Gasp!"
print math.pow (2, 3)

#String Manipulation
## Strings can be added and multiplied
print "New " + "York" #returns "New York"
print "Come on and slam " * 3 #returns that phrase three times
print "That class was s" + "o" * 7 + " boring."
## There are some functions to help with strings
### len() returns the length of the string
word = "My words are important!"
print len(word) #returns 23
### There are other functions that work in the same manner, but do different things
#### find() lets you search a string for a certain substring
#### split() lets you break strings into substrings
#### strip() removes white space from the string's end
#### isupper() tells if the letters are uppercase
#### lower() converts all letters to lowercase

#Indexing & Slicing
##Indexing lets you access individual characters in a string
phrasey = "Python rocks"
print phrasey [0] #returns P
##Slicing lets you get a range of characters from the string
print phrasey [7:11] #returns rock
print phrasey [1:] #returns ython rocks
print phrasey [:6] #returns Python
print phrasey [:]  #returns whole phrase, you goof
