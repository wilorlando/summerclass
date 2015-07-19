#serves the same purpose as create_frame, but will be neater when more widgets are added on

from Tkinter import *

class MyFrame(Frame): #creates a new class caled 'MyFrame', then puts 'Frame' in parentheses to tell Python that MyFrame should inherit from Frame
    def __init__(self): #starts the definition for the class constructor, __init__
        Frame.__init__(self) #calls the constructor of the base class, Frame

        self.myCanvas = Canvas(width=300, height=200, bg="blue")
        self.myCanvas.grid()
        self.myCanvas.create_rectangle(10, 10, 100, 100, outline="white", fill="black", width=50)
#Now create a MyFrame object and call on mainloop
frame02 = MyFrame()
frame02.mainloop()
 
