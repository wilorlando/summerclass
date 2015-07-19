#LESSON TEN PYTHON ASSIGNMENT

#Revise your program from the Lesson 9 Assignment so that it stores the student grades in a shelf file.
#Remember, this program should prompt the user for the student's name and score.
#After the user has finished entering grades, allow him/her to search that file for a particular student's score.

#dict_name{student_name: score}
import pickle
import shelve


print "This program will store students' test grades, then allow you to search through them."
print "When you are finished, enter 'q'."
print "If you want to clear the existing grade list, enter 'clear'."

test_grades = shelve.open("C:\Python25\Lib\idlelib\Wil's Python\Lesson 10\grades.txt", 'c')
#^lol that was the only existing line I had to change

while (True): #This loop is for entering names and scores
    student_name = raw_input("Enter a student's name: ") #name prompt

    if student_name == 'q':
        break
    elif student_name == 'clear':
        test_grades.clear()
        print ("Grades cleared!")
        student_name = raw_input("Now, enter a student's name: ")
    
    score = raw_input("Good! Now enter that student's score: ") #score prompt

    if score == 'q':
        break
    elif score == 'clear':
        print ("Grades cleared!")
        score = raw_input("Now, enter " + student_name + "'s score: ")
        
    
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

test_grades.close()
print "\nProgram ended. Goodbye!"
