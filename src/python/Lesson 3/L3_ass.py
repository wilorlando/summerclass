#Assignment 3

#Meteorologists use the Saffir-Simpson Scale to classify the strength of hurricanes.
#The intensity is based on the maximum sustained wind speed of a storm as follows:
#Saffir-Simpson Scale:
## Category 1: Wind Speed 74 - 95 mph
## Category 2: Wind Speed 96 - 110 mph
## Category 3: Wind Speed 111 - 130 mph
## Category 4: Wind Speed 131 - 155 mph
## Category 5: Wind Speed 156+ mph

#Write a Python program that will prompt the user for a wind speed.
#The program should use this wind speed to display a message telling the user the hurricane's intensity based on the table above.

print "HERE I AM"
print "CLOCK YOUR WINDSPEED HURRICANE"

windSpeed = input("Enter wind speed: ")

if windSpeed < 74:
    print "That's no hurricane!"
elif windSpeed >= 74 and windSpeed < 96:
    print "That's a Category 1 hurricane!"
elif windSpeed >= 96 and windSpeed < 111:
    print "That's a Category 2 hurricane!"
elif windSpeed >= 111 and windSpeed < 131:
    print "That's a Category 3 hurricane!"
elif windSpeed >= 131 and windSpeed < 156:
    print "That's a Category 4 hurricane!"
elif windSpeed >= 156:
    print "That's a Category 5 hurricane! Run for the hills!"
else:
    print "If your windspeed can only be expressed by imaginary numbers, you've got bigger problems than categorizing a storm."
