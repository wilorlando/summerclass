#LESSON EIGHT PYTHON ASSIGNMENT

#Write a program that will compute the average of a series of numbers entered by the user.
#Store all of the numbers in a list, so that the user's numbers can be displayed again before the average.
#Have your program stop accepting values when the user enters the value -999.
#Note that this value (-999) should not be averaged in with the other numbers

print "This program will average a series of numbers you enter."
print "When you are finished, enter -999."

num_list = []
num_sum = 0.0

while True:
    input_num = input("Enter a number: ")

    if input_num == -999:
        break
    
    num_list.append(input_num)

print "You entered these values:"
print num_list

for count in range(len(num_list)):
    num_sum = num_list[count] + num_sum

average = num_sum/len(num_list)

print "The average of these values is ", average
