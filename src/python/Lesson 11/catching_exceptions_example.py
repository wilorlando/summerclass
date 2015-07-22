Fifteen = 15

try:
    age = input("Please enter your age: ")
    ten_years = age + 10
    print "In 10 years, you'll be", ten_years
except NameError:
    print "You must enter a number for your age."

print "Goodbye."
