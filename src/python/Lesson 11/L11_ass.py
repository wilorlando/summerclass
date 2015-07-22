#LESSON ELEVEN ASSIGNMENT

#Two other Python exception types are 'OverflowError'(which happens when a number is too big to be stored in memory) and 'KeyboardInterrupt' (which occurs when the user presses CTRL-C)
#Use this infinite loop segment inside a try block:

## counter = 1
## while (counter >= 1):
##    counter = counter + 1

#Have the code inside your except statements print the value of the number so that the user will know how far the loop progressed before the exception occurred

print "This is a counter program. Cause an error to check the current value."
print "Lowest score wins."
print "The easiest (only?) way is to press CTRL+C, or wait for an overflow. Good luck."

try:
    counter = 1
    while (counter >= 1):
        counter = counter + 1
except (OverflowError, KeyboardInterrupt):
    print counter
except Exception:
    print "Ooh, nice one."
    print counter

print "Goodbye!"
