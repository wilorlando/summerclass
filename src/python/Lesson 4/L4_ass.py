#Python Lesson 4 Assignment

#Write a program that reads a list of numbers from the user and displays the sum and everage of this list.
#Your program should allow the users to enter as many numbers as they wish.
#When users are done entering numbers, they'll enter the value -1. Be sure not to include -1 in calculations of sum or average.

again = "y"

print "Hello!"
print "This program will return the sum and average of the numbers you enter."
print "When you are finsihed, enter -1."

while again == "y":
    v_sum = 0.0
    current_number = 0.0
    count = 0
    average = 0.0

    while 1 == 1:
        current_number = input("Enter a number: ")
        if current_number == -1:
            break
        v_sum = current_number + v_sum
        count = count + 1

    print "The sum of these numbers is", v_sum
    average = v_sum / count
    print "The average of these numbers is", average

    again = raw_input("Would you like to run this program again? (y/n) ")
    if again == "y":
        continue
    elif again == "n":
        break
    else:
        print "Invalid character. Defaulting to yes."

print "Program closed. Goodbye!"
    
