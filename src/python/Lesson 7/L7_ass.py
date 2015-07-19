#LESSON SEVEN PYTOHN ASSIGNMENT

#Create AAARRRTTT using Python
#Due to my Picasso-level art skills, I will *attempt* to draw a stick figure under some kind of sky
#Thank me later, culture


from Tkinter import *
from time import *

class MyFrame(Frame):
    def __init__(self):
        
        Frame.__init__(self)

        self.myCanvas = Canvas(width = 900, height = 600, bg="#5CD6FF")
        self.myCanvas.grid()

        self.myCanvas.create_rectangle(0, 400, 900, 600, fill="dark green") #ground

        self.myCanvas.create_line(425, 400, 450, 350, width = 10) #left leg
        self.myCanvas.create_line(475, 400, 450, 350, width = 10) #right leg

        self.myCanvas.create_line(450, 350, 450, 275, width = 10) #torso

        self.myCanvas.create_line(450, 280, 415, 340, width = 8) #left arm
        self.myCanvas.create_line(450, 280, 485, 340, width = 8) #right arm

        self.myCanvas.create_oval(425, 225, 475, 275, width = 4, fill = "#FFCCCC")#head

        sun_id = self.myCanvas.create_oval(0, 300, 100, 400, fill = "#FFFF99", outline = "#FFFF99")
        
        self.myCanvas.update()
        for count in range(200): #sunrise
            x_increment = 2 * count
            y_increment = -1.5 * count
            
            self.myCanvas.coords(sun_id, 0 + x_increment, 300 + y_increment, 100 + x_increment, 400 + y_increment)
            self.myCanvas.update()
            sleep(0.02)

        for count in range(300): #sunset
            x_increment = 2 * count
            y_increment = 1.5 * count

            self.myCanvas.coords(sun_id, 400 + x_increment, 0 + y_increment, 500 + x_increment, 100 + y_increment)
            self.myCanvas.create_rectangle(0, 400, 900, 600, fill="dark green") #ground
            self.myCanvas.update()
            sleep(0.02)

        self.myCanvas.create_text(530, 225, text="Hooray", font=("Times", 12), fill="white")

frame01 = MyFrame()
frame01.mainloop()
