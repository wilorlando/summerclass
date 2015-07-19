#LESSON SIX PYTHON NOTES
#OUT OF MACTION EDITION

#Classes
## Like blueprints; They give us the ability to write a specification for how an object created form this calss should look and behave
## Made of two basic things: Variables and Functions
### You should know what both of those are by now

#Constructor
## A CLASS CONSTRUCTOR is a special function defined inside of the class that creates (constructs) the object

#Class Example

class Time:
       """ Blueprint for a Time object"""
       def __init__(self):
           self.hour = 0
           self.minute = 0
           self.second = 0

## 'class Time:' is just starting and naming the class
## '""" Blueprint for a Time object"""' is the docstring. Again, you should know by now.
## 'def __init__(self):' has a lot going on
### 'def' is just the keyword for starting a function. See last lesson.
### '__init__' is Python's keyword for the class constructor. Every class constructor will have this name, no matter the name of the class.
### '(self)' is the OBJECT REFERENCE. All class methods must define this one parameter. It is used to gain access to the particular object's variables.
### The three variables all start with 'self', so Python knows that they belong the the 'self' object instead of being global variables.
## Methods Examples

def set_time(self, hour, minute, second):
     self.hour = hour
     self.minute = minute
     self.second = second

def print_time(self):
    print self.hour, ":", self.minute, ":", self.second
    
#Creating Objects
## With the 'Time' example (see Time.py), done with a single line of code

myTime1 = Time()

## When writing a class function you must ALWAYS start the parameter list with 'self'
## But when calling on a function, you always ignore 'self' (hence the blank parens)
## To call a function:

myTime1.set_time(1, 2, 3)

myTime1.print_time()


## SWEEEEEELLLLL

#Modules
## Usually you don't define a class and create objects and stuff all in the same file.
## MODULES are other programs you wrote that can be imported (like a list of functions)
### Importing:

from Time import Time

### "Wow, that looks stupid." Yes! But it makes sense.
### The first 'Time' refers to thename of the module (which is the file name (Time.py) without the extension)
### The second 'Time' is the name of the class I want to import and use

#Accessing Class Variables Directly
## Unlike other programming languages, Python lets you change an object's variables directly. This is bad.
## To stop that, there's a convention of putting two underscores (__) before a variable name in classes to note they shouldn't be accessed directly
## Name Mangling
### Thing I just described with the double underscores
### Prevents direct access of fields
### Way to (sort of) hide variables from other programs, so unintended errors don't occur

#Special Attributes
## Specialized information that can be accessed through code
## Examples
### '__doc__'
#### Can be used to get the docstring for the class
#### print myTime1.__doc__
### '__class__'
#### Gives the class from which the object was created
#### print myTime1.__class__ (Which returns 'Time', the name of the class)
### '__name__'
#### Gives the class name where the class is located
#### print Time.__name__
### '__module__'
#### Gives the module name where the class is located
#### print Time.__module__
