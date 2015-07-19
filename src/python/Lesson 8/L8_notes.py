#LESSON EIGHT PYTHON NOTES
#DISTRACTED BY REDDIT EDITION

#Lists
## Like arrays in other languages
## A variable that's able to store an ordered collection of values
## Each individual value in the list is called an ELEMENT
### Elements can be called through the list's name and a unique number specifying the location of the element in the list
### The number of the element in the list is called the INDEX or SUBSCRIPT
## Example

days_of_week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

### To call on this list, you'd do this:

print days_of_week[2]

#### That would return 'Tue', since it's the second term in the list (Counting 0)
### To print ALL the values, you'd do something like this:

for count in range(7):
    print days_of_week[count]

## To determine the number of elements in a list, use Python's 'len()' function
### Example

for count in range(len(days_of_week)):
    print days_of_week[count]

## To change values in a list, think of each element as a variable
### Example

days_of_week[0] = 'Sunday'

## Python lets you work with an entire list as a single unit
### This would return ['Sunday', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']:

print days_of_week

## Slicing works with lists
### Example

print days_of_week[2:5]

#### That would return 'Tue', 'Wed', 'Thu'
## Python's lists aren't limited to one data type
### One list could store strings, ints, and decimals
### Example

child1 = ['Pat', 5, 6.5]

## You can even store lists inside of other lists!
### These are called NESTED LISTS. Or listception. Whichever you prefer.

child1 = ['Pat', 5, 6.5]
family = [child1]
print family [0][1]

#### That would return '5'. It grabs the [0] element in family (which is child1), then the [1] element in that (which is 5)
## Adding Elements to Existing Lists
### Python lets you add elements to exsiting lists. Woo.
### This means you can create an empty list, like so:

my_list = []

### To add to a list, you'll use the 'append()'

my_list.append(10)
my_list.append('ten')

#### my_list now has two elements stored: 10 and 'ten'
### You can also add values to lists (in one line of code) with the 'extend' method:

my_list.extend([20, 'twenty'])

#### print my_list would now return [10, 'ten', 20, 'twenty']
### You can also also add values to lists using CONCATENATION (the plus sign thing)

my_list = my_list + [30, 'thirty']

### BUT WAIT THERE'S MORE
### To insert an item at a specific index in the list, use the 'insert()' method

my_list.insert(3, 'hi there!')

#### That stores 'hi there!' at [3]
#### Python shifts all following values to the right by one, so whatever was in [3] is now in [4] and [4] is in [5] and so on

### You can remove items from a list using the 'remove()' method

my_list.remove('hi there!')

#### Interesting thing about remove: only the first item with the value you specify is removed
#### If I had another 'hi there!' in [6] or something, remove() wouldn't touch it
### You can print out the smallest or largest item in the list using 'max()' and 'min()'

print max(my_list)
print min(my_list)

#### Remember, numbers come before strings in unicode. 'thirty' is bigger than 30.
#### This also means the max value of a mixed list will be the biggest string, while min value of it will be the smallest number
### You can sort the values in a list in increasing order using the 'sort' method

my_list.sort()

### And, finally, you can reverse the order of elements in the list with 'reverse()'

my_list.reverse()

## Woo

#Tuples
## Like lists
### Can use most of the methods lists can
### Can store an ordered sequence of elements
## Tuples are also DIFFERENT from lists in a few key ways
### Format

days_of_week = ('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat')

#### The values are enclosed in parentheses instead of square brackets, see?
### Tuples are also IMMUTABLE
#### IMMUTABLE means that you can't change the values in a tuple, like you can with lists
#### If you tried "days_of_week [0] = 'Sunday'", you'd get an error message. Values can't be changed in a tuple.
## Why use tuples?
### They're stored more efficiently than lists, so programs that use tuples will run faster than those using lists
### Tuples are great when you want to be absolutely sure the values don't change
##Hooray

#Graphical Stuff (Again)
## 'find_enclosed()' requires the coordinates for a bounding box, and will create a tuple for all components that are completely enclosed in that bounding box
### Example

from Tkinter import *
from time import *
class MyFrame(Frame):
  def __init__(self):
     Frame.__init__(self)

     self.myCanvas = Canvas(width=150, height=150, bg="white")
     self.myCanvas.grid()

     self.myCanvas.create_rectangle(10, 10, 20, 20, fill="red")
     self.myCanvas.create_rectangle(10, 30, 20, 40, fill="yellow")
     self.myCanvas.create_rectangle(10, 50, 20, 60, fill="blue")

     print "Finds all shapes"
     print self.myCanvas.find_enclosed(0, 0, 30, 70)

     print "Finds middle shape"
     print self.myCanvas.find_enclosed(0, 25, 30, 45)

     print "Finds no shapes"
     print self.myCanvas.find_enclosed(0, 0, 1, 1)

frame02 = MyFrame()
frame02.mainloop()
