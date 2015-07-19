LESSON SEVEN PYTOHN NOTES
DEJA VU EDITION

#Tkinter Module
## Module that comes with the Python download
## Contains a number of different graphical user interface (GUI) components
## from Tkinter import *

#Widgets
## Short for 'windows gadgets'
## Frame
### Like a window
### A container for other widgets
### Example

from Tkinter import *

frame01 = Frame()
frame01.mainloop()

#### First line is an import statement (see last lesson)
#### Second line creates the Frame object
#### Third line uses frame01 to call on a method named mainloop (mainloop runs a loop to keep the Frame showing until the user chooses to close it)
### Example 2 (Neater, using classes, etc.)

from Tkinter import *

class MyFrame(Frame): #creates a new class caled 'MyFrame', then puts 'Frame' in parentheses to tell Python that MyFrame should inherit from Frame
    def __init__(self): #starts the definition for the class constructor, __init__
        Frame.__init__(self) #calls the constructor of the base class, Frame

frame02 = MyFrame()
frame02.mainloop()

### Swell
## Canvas
### Lets you create and draw shapes and text
### Excellent for creating graphs and charts
### Also allows the user a place to draw
### Like a container that can hold shapes
### Example

self.myCanvas = Canvas()
self.myCanvas.grid() #Tells Frame's LAYOUT MANAGER that we're using a 'grid' layout

### That canvas will look pretty much the same as before, since it matches the default frame
### You can add tons of options and stuff, though

self.myCanvas = Canvas(width=300, height=200, bg="blue") # 300 width, 200 height, blue background
self.myCanvas.grid()

### Super swell

#Canvas Shapes
## Usually follow the format of 'create_<shape>()'
## Rectangle
### create_rectangle()
### Requires four arguments: the xy coordinates of the top left corner, as well as the xy coordinates of the bottom right
### Example

self.myCanvas.create_rectangle(10, 10, 100, 100)

### Additional options
#### 'fill' controls  the color of the rectangle
#### 'outline' controls the color of the rectangle's outline
#### 'width' controls the width of the outline
#### Example

self.myCanvas.create_rectangle(10, 10, 200, 100, fill="blue", width=30)

### SWELL
## Oval
### create_oval
### Requires four arguments (like a rectangle), but they define the BOUNDING BOX instead of the corners of the oval (because ovals don't have corners. Duh.)
#### The BOUNDING BOX is the smallest possible rectangle that cna enclose the oval
### Can use the same additional arguments (fill, outline, width) that rectangles can
### Example

self.myCanvas.create_oval(10, 10, 200, 100, fill="white")

### Woo
## Line
### create_line
### Requires four arguments: xy coordinates of the first point, and xy coords of the endpoitn
### Can also use the width and fill options
### Also has an option for 'arrow' to decide where to place arrowheads on the line
#### 'arrow' accepts 'first', 'last', and 'both'.
### Example

self.myCanvas.create_line(1, 1, 200, 200, arrow="first")

### Yay
## Text
### create_text
### Requires three arguments: The xy coords of where you want to display the text, as well as the text you want to display
### Example

self.myCanvas.create_text(50, 50, text="Hello World")

### Can also use the fill and width options
### Has a 'justify' option (accepts 'left', 'center', and 'right') to control how the text is aligned
### Has an 'anchor' option to determine where text should be place relative to the point you specified
#### Accepts directions on a compass (n, ne, e, se, s, sw, w, sw), as well as the default (center)
### Has a 'font' option which follows this format: ("<font name>", size)
### Big Example

self.myCanvas.create_text(1, 1, text="Hello World", width=70, fill="blue", anchor="nw", justify="center", font=("Times", 16))

### Hooplah

#Inheritance
## The ability to take an existing class and add to it
## Basically, defining a brand new class (called the derived class)
## The DERIVED CLASS will have everything the BASE CLASS has, plus anything else we add to it

#Simple Animation
## One way to simulate animation is pausing the program
## The idea is to draw a shape on the Canvas, have the program pause, then draw another shape
## Python includes a module called 'time' which includes some handy methods
## One of these methods is 'sleep()', which has the program pause for the specified number of seconds
### Example

sleep(0.5)

#### We'd need an import statement of 'from time import *' at the top, of course
## Another critical thing is the Canvas method 'update()', which draws the Canvas as it's specified currently in the program code
## Example of Basic Animation

from Tkinter import *
from time import *

class MyFrame(Frame):
    def __init__(self):
        Frame __init__(self)

        self.myCanvas = Canvas(width=300, height=200, bg="white")
        self.myCanvas.grid()

        self.myCanvas.create_rectangle(10, 10, 50, 50)
        self.myCanvas.update()

        sleep(1)

        self.myCanvas.create_rectangle(20, 20, 60, 60)

frame02 = MyFrame()
frame02.mainloop()

## Example 2, using loops and stuff

for count in range(10):
  increment = 10*count
  self.myCanvas.create_rectangle(10 + increment,
     10 + increment, 50 + increment, 50 + increment)
  self.myCanvas.update()
  sleep(1)

##Woo

#Better Animation
## Two ways to go about it
## The first method just creates a ton of shapes, then draws over the ones you aren't using
### Example

for count in range(10):
  increment = 10*count
  self.myCanvas.create_rectangle(10 + increment,
     10 + increment, 50 + increment, 50 + increment)
  self.myCanvas.update()
  sleep(1)

  # Now color over the previous rectangle
  self.myCanvas.create_rectangle(10 + increment,
     10 + increment, 50 + increment, 50 + increment,
     outline="white")

## The second way manipulates the shape after it's created, instead of making new ones
## When we create shapes, we're actually using function calls that return a method
## Example

my_rect_id = self.myCanvas.create_rectangle(10, 10, 50, 50)
self.myCanvas.update()
for count in range(10):
  increment = 10*count
  self.myCanvas.coords(my_rect_id,
     10 + increment, 10 + increment,
     50 + increment, 50 + increment)
  self.myCanvas.update()
  sleep(1)

