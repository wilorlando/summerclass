try:
    age = input("Please enter your age: ")
    ten_years = age + 10
    print "In 10 years, you'll be", ten_years
except NameError:
    print "A NameError has occurred"
except Exception:
    print "Something unexpected has happened"

print "Have a nice day. Goodbye."
