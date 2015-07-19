class Time:
       """ Blueprint for a Time object"""
       def __init__(self):
           self.hour = 0
           self.minute = 0
           self.second = 0

       def set_time(self, hour, minute, second):
            self.hour = hour
            self.minute = minute
            self.second = second

       def print_time(self):
           print self.hour, ":", self.minute, ":", self.second

#First Time object
myTime1 = Time()
myTime1.print_time()
myTime1.set_time(1, 2, 3)

#Second Time object
myTime2 = Time()
myTime2.set_time(12,0 ,0)

print "My two time objects are now storing:"
myTime1.print_time()
myTime2.print_time()
