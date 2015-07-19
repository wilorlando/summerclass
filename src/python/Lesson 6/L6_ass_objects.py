#LESSON SIX ASSIGNMENT

#Write a short Python program that creates a Time object and works with some of the functions.

from L6_ass_class import Time

myTime1 = Time()
myTime1.print_time()
myTime1.set_time(1, 2, 3)

myTime2 = Time()
myTime2.set_second(5)
myTime2.set_minute(59)

breakEverything = Time()
breakEverything.set_second(60)
breakEverything.set_minute(60)
breakEverything.set_hour(24)
breakEverything.get_second()
breakEverything.get_minute()
breakEverything.get_hour()

