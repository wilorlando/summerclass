import math

print "This program will run three numbers through the quadratic formula."

a = input("Enter a: ")
b = input("Enter b: ")
c = input("Enter c: ")

root1 = ((-b + math.sqrt(b**2.0 - 4.0*a*c))) / 2.0 * a
root2 = ((-b - math.sqrt(b**2.0 - 4.0*a*c))) / 2.0 * a
    
print "Your roots are ", root1, " and ", root2
