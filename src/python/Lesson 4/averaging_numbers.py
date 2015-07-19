# Program to get some numbers from user and compute the average

num_of_nums = input("How many numbers are you going to average? ")

sum = 0.0

for count in range(num_of_nums):
    value = input("What number do you want to average? ")
    sum = sum + value

average = sum / num_of_nums

print "The average is", average
