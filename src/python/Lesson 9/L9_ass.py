#LESSON NINE PYTHON ASSIGNMENT

#Write a program that stores information about student test grades in a dictionary.
#Your program should prompt the user for the student's name and score.
#Once the user is finished entering grades, allow him/her to search the dictionary for a particular student and print his/her score.

#dict_name{student_name: score}

print "This program will store students' test grades, then allow you to search through them."
print "When you are finished, enter 'q'."

test_grades = {} #defining the test_grades dictionary

while (True): #This loop is for entering names and scores
    student_name = raw_input("Enter a student's name: ") #name prompt

    if student_name == 'q':
        break
    
    score = raw_input("Good! Now enter that student's score: ") #score prompt

    if score == 'q':
        break

    
    test_grades[student_name] = score #enters name and score into dictionary

#^This loop will continue until the user enters 'q', to signify they're done entering stuff.

print "All done with entries!"

while (True): #This loop is for searching through and printing the previously entered names and scores
    print "\nTo print all grades, enter 'all'."
    print "To print a particular student's grade, enter that student's name."
    print "To end the program, enter 'q'."

    course_of_action = raw_input("Please enter a thing: ")
    print "" #ghetto \n

    if (course_of_action == 'q'): #quit
        break
    elif (course_of_action == 'all'): #print all entries, in alphabetical order
        my_keys = test_grades.keys()
        my_keys.sort()

        for current_key in my_keys:
            print current_key, '\t', test_grades[current_key]
    elif (test_grades.has_key(course_of_action)): #check to see if course_of_action is a valid entry in the dictionary
        print test_grades[course_of_action] #if so, it will print that student's grade
    else: #if the user entered an invalid course_of_action
        print "Sorry, that name isn't recognized. Try again!"

print "\nProgram ended. Goodbye!"
