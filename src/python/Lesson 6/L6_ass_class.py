# PYTHON LESSON SIX ASSIGNMENT

#Edit Time class to include the following:
## The two underscore characters for variable names, to restrict access
## A getter and setter function for each of the hour, minute, and second variables. Be sure the set functions do the error checking necessary to insure valid times.
## A function named tick() that will increment the number of second by 1. Be aware that this function will need to check to be sure that we haven't moved the the next minute or hour.
# When you're finished editing, write a short program that creates a Time object and works with some of the functions. Inside this program, you might consider writing a loop and placing a call to the tick function to watch your time move forward.

class Time:
       """ Blueprint for a Time object"""
       def __init__(self):
           self.__hour = 0
           self.__minute = 0
           self.__second = 0

       def set_time(self, hour, minute, second):
           self.__hour = hour
           self.__minute = minute
           self.__second = second

       def print_time(self):
           print self.__hour, ":", self.__minute, ":", self.__second


       def get_hour(self):
           return self.__hour

       def get_minute(self):
           return self.__minute

       def get_second(self):
           return self.__second

       def set_hour(self, hour):
           if (hour < 0) or (hour > 23):
               hour = 0
           else:
               self.__hour = hour

       def set_minute(self, minute):
           if (minute < 0) or (minute > 59):
               minute = 0
           else:
               self.__minute = minute

       def set_second(self, second):
           if second < 0 or second > 59:
               second = 0
           else:
               self.__second = second

       def tick(self):
           if self.__second < 59:
               self.__second = self.__second + 1
           elif self.__minute < 59:
               self.__second = 0
               self.__minute = self.__minute + 1
           else:
               self.__second = 0
               self.__minute = 0
               self.__hour = self.__hour + 1
               
