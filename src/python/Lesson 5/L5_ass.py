#PYTHON ASSIGNMENT FIVE

# Write a Python program that will print a table of Celsius temperatures and their
##Fahrenheit equivalents between 0 and 100 Celsius in incremenets of 10 degrees.
## Your program should include a function named convert_to_fahrenheit that takes
##a Celsius temperature and returns the corresponding Fahrenheit temperature.
## The formula used to convert a Celsius temp to a Fahrenheit temp is this:

## Fahrenheit = 9.0/5.0 * Celsius + 32

print "This program shows a table of celsius temperatures and their fahrenheit equivalents."


def convert_to_fahrenheit(celsius):
    '''Converts the (Celsius) input to Fahrenheit'''
    fahrenheit = 9.0/5.0 * celsius + 32
    return fahrenheit

count = 0

while 1 == 1:

    if count > 100:
        break
    
    print count, "\t", convert_to_fahrenheit(count)
    count = count + 10
