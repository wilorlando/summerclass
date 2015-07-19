#LESSON SIX ASSIGNMENT

#Inside this program, you might consider writing a loop and placing a call to the tick function to watch your time move forward.

from L6_ass_class import Time

myTime = Time()

while 1 == 1:
    myTime.tick()

    if myTime.get_hour() == 1:
        break
    
    myTime.print_time() 

print "It's over."
print "It's done."
