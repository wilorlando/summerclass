#Lesson 3 Notes

#If Statements
## Basic format(< and > indicate placeholders and would not appear in real code):

#if <condition>:
#    <action>

## Example:

age = 10
if age == 10:
    print "ten"
    print "Yeah! Ten."

## Operations
### Used to compare values in if statements
#### < (Less than)
#### > (Greater than)
#### <= (Less than or equal to)
#### >= (Greater than or equal to)
#### == (Equal to)
#### != (Not equal to)
### Example:

age = 10
if age < 11:
    print "Less than eleven"

### Example 2:

age = 10
if age != 85:
    print "Not eight-five"

## If statements work with strings:

name = "me"
if name == "me":
    print "the same"

## Operators work with strings, too, but they're compared alphabetically by Unicode
## UNICODE is a table that correlates numbers to characters. ASCII is a subset of Unicode.
## In Unicode, A is less than B, B is less than C, and so on. The uppercase alphabet comes before the lowercase one, so A (and B and C and Z) are all less than a.

letter = "C"
if letter < "D":
    print "less than D"
if letter > "B":
    print "greater than B"
if letter != "c":
    print "not equal to c"

#Else Statements
## I KNOW THIS ALREADY BLEH
## Added on to if statements to activate a different action if the condition isn't met
## Format:

#if <condition>:
#    <action>
#else:
#    <different action>

## Example:

if age >=18:
    print "Old enough to vote"
    print "hooray"
else:
    print "Not old enough to vote"
    print "aw"

#Nesting
## NESTING is putting one thing inside of another. In this case, those things are if and else statements.
## Example:

year = input("Enter year: ")
if year == 1:
    print "Freshman"
else:
    if year == 2:
        print "Sophomore"
    else:
        if year == 3:
            print "Junior"
        else:
            if year == 4:
                print "Senior"

## Be careful with indenting. It takes the place of Java's brackets in Python, so make sure your ifs and elses line up.

#Elif statements
## Else if statements, for those of you at home.
## Example:

year = input("Enter year: ")
if year == 1:
    print "Freshman"
elif year == 2:
    print "Sophomore"
elif year == 3:
    print "Junior"
elif year == 4:
    print "Senior"
else:
    print "Not a valid year"

## That functions exactly the same as the above nested-if example, except for the final else statement I added. Woo.

#Compound conditions
## If/elif statements that evaluate two or more conditions at once
## Use the logic operators "and" and "or", which do pretty much what you'd expect.

age = input("How old are you? ")
registered = raw_input("Are you registered? (y/n) ")

if age >= 18 and registered == "y":
    print "You are ready to vote!"
else:
    print "You are not ready to vote."

#Big cumulative example: THE BIG SHEBANG
## BASK IN THE GLORY

rate = input("What is your hourly wage? ")
hours = input("How many hours did you work? ")

if hours < 40:
    pay = hours * rate
else:
    pay = hours * rate
    overtimeHours = hours - 40
    overtimePay = overtimeHours * (rate * 0.5)
    pay = pay + overtimePay
print "Your weekly pay is: ", pay

