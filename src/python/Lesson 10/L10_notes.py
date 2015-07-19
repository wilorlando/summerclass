LESSON TEN PYTHON NOTES
HOMESICK BEAGLE EDITION

#Python File Basics
## Think of data files like a book: If the book isn't open, you can't access the data inside
## The 'open()' method will, gasp, open the file.
### Must be provided with the name of the file, then whether you'll be reading from or writing to the file.
### Example

out_file = open('mydata.txt', 'w')

#### That line will open a data file named 'mydata.txt' for output, then store the file object in a variable named 'out_file'
#### The 'w' is how you specify you're writing this file. Be aware that, if you've got a file open in this mode, you can't read from it until the file is closed
#### Also: 'w' will ALWAYS create a new file, erasing what was there before. If you want to append to an existing file, use 'a' (More on that later)
### If you want to be SURE of your file's location, you can list the full path instead of just a filename in your open statement.
#### Example

out_file = open('C:\Documents and Settings\Mike\Desktop\mydata.txt', 'w')

##### That would save it to the Desktop, obviously
##### If I'd already had a file named 'mydata.txt' in that directory (the Desktop, in this case), it would be erased and replaced with this one. There's a way around this erasing, but we'll get there later.
## Now that the file's open, we can write data to it with the 'write()' and 'writelines()' methods
### The 'write()' method writes a single string to a file
### The 'writelines()' method writes a list of strings.
#### Be aware that neither method creates line breaks within a single or multiple lines of strings.
### Example

out_file.write('Hello')
out_file.write('world!')

#### That would result in a data file that looks like this:

Helloworld!

### Example 2

weekends = ['Saturday', 'Sunday']
out_file.writelines(weekends)
out_file.writelines(weekends)

#### That code would produce this text in a data file:

SaturdaySundaySaturdaySunday

### To include line breaks, simply use the newline character '\n' where you want it
#### Example

out_file.write('Hello\n')
out_file.write('world!')

##### If you execute this code, the data may not immediately appear in the file; File access is a time-consuming operation
##### If you want to force the data to be written immediately, use the 'flush()' method
###### Example

out_file.flush()

## And, after you open a file and write data to it, the file must be closed with 'close()'
### Example

out_file.close()

## To READ data from a file (instead of writing data TO it), first open it for reading by replacing the 'w' in open() with an 'r'
### Example

in_file = open('C:\Documents and Settings\Mike\Desktop\mydata.txt', 'r')

#### Note: Teacher used in_file for input variable and out_file for output variable
##### This is not a Python requirement
##### He just wants to remind himself not to read from a file opened for output or write to a file opened for input
## Once the file's opened, three methods can be used to read from it:
### read()
#### You can provide a number of bytes to be read in. You could, alternatively, leave the parentheses blank; This will cause the rest of the data from the file to be read
#### Example

first = in_file.read(1)
second = in_file.read()

##### 'first' reads in, at most, 1 byte of data from the file
##### 'second' reads an entire line
##### If the data file was this:

HelloGoodbye

###### 'first' would store 'H'
###### 'second' would store 'elloGoodbye'
### readline()
#### Similar to read(), but no number of bytes are provided
#### readline() will read an entire line of data from a file
#### readline() also allows you to specify a maximum number of bytes
##### ...If that's confusing to you, that's because it is. read() and readline() are functionally the same.
##### The instructor likes to use read() for reading a certain amount of characters, and readline() for reading full lines, but only to make his code easier to interpret. There is no other difference.
##### In short: WORTHLESS
### readlines()
#### You can provide a maximum number of bytes for readlines() to read
#### If you don't provide a number of bytes, it'll read to the end of the file
#### readlines() is different in that it returns a list, with each line from the file as a new item in the list
#### Example

# DATA FILE
First line
Last line
# /DATA FILE

print in_file.readlines()
##### Returns ['First line\n', 'Last line']
## As with output files, you must close the input files when you're done.

in_file.close()



#More File Operations
## Appending to an Existing File
### To add to an (existing) data file without overwriting it, simply open it with 'a' in the open() method
#### Example

out_file = open('C:\Documents and Settings\Mike\Desktop\mydata.txt', 'a')

### Remember, when you add new output to the end of the file, line breaks aren't included. Make sure to slap on a '\n'.
### If you already had a data file of 'Hello', you'd do something like this:

out_file.write('\nGoodbye')

## Other Ways to Open Files
### Up until now, output files ('w') can only be written in, and input files ('r') can only be read
### Python provides two other ways to open files in open(): 'r+' and 'w+'
#### Attempting to open a nonexistent file with 'r+' will generate an IOError
#### Attemption to open a nonexsitent file with 'w+' will make Python just create a file there for you
### Reading and Writing in the Same File
#### Same basic principles, but you have to keep track of your current position in the file as you do your reading and writing
#### The 'tell()' method will give you your current file position as the number of bytes from the start of the file
##### Example

# DATA FILE
First line
Second line
# /DATA FILE

in_file = open('C:\Documents and Settings\Mike\Desktop\mydata2.txt', 'r+')
print in_file.read(1) # F
print in_file.tell() # 1

##### After opening the file and reading the chacter of text, the file is located at position 1.
##### Remember: The newline characters (\n) are also counted in tell()
#### The 'seek()' method will take you a specified number of bytes into the file
##### Example (Same data file as above)

in_file = open('C:\Documents and Settings\Mike\Desktop\mydata2.txt', 'r+')
print in_file.readline() # First line

in_file seek(0)
print in_file.readline() # First line

##### seek() also lets you move relative to the location where you currently are
##### Provide '1' as the second argument to note that you're moving relative to the current location. Note: To move backwards, provide a negative number.
###### Example (Same data file as above)

in_file = open('C:\Documents and Settings\Mike\Desktop\mydata2.txt', 'r+')
print in_file.read(3) #Fir

in_file.seek(-1, 1)
print in_file.read(1) # r

in_file.seek(1, 1)
print in_file.readline() # t line

##### seek() ALSO lets you move relative to the END of the file
##### To do this, make the second argument a '2'
###### Example

in_file.seek(-10, 2)

####### That will set the current position to be 10 characters from the end of the file
####### Bear in mind that, when specifying a position relative to the end of a file, the first argument should ALWAYS be negative
## Reading and Writing in the Same File
### Note: When you're writing to a file that already has data in it, you'll be overwriting the existing characters
### Example (Same data file as above)

in_file = open('C:\Documents and Settings\Mike\Desktop\mydata2.txt', 'r+')
print in_file.readline() # First line

in_file.seek(0)
in_file.write('Hi!')
in_file.seek(0)
print in_file.readline() # Hi!st line




#Pickle and Shelve
## Pickle
### The pickling process converts an object to a stream of bytes, which can then be reconverted to the original object later
### Note: You must use an import statement to import pickle
### Two Ways to Pickle
#### 'dumps()' stores the result in a string
#### 'dump()' stores the result in a file
### Example

import pickle
letters = ['a', 'b', 'c']
pickled_letters = pickle.dumps(letters)

#### This converts 'letters' to a (basically) unreadable stream of bytes, stored as the string 'pickled_letters'
### Example 2

import pickle
outfile = open('data.txt', 'w')
letters = ['a', 'b', 'c']
pickle.dump(letters, outfile)
outfile.close()

#### That stores the pickled list to a data file
### Two Ways to Unpickle
#### To get pickled data back to its original form, use one of two methods
#### 'loads()' will unpickle from a string
#### 'load()' will unpickle from a file
#### Example (Using above examples as a base)

unpickled_letters = pickle.loads(pickled_letters)
print unpickled_letters # ['a', 'b', 'c']

#### Example 2 (Using above examples as a base)

infile = open('data.txt', 'r')
file_data = pickle.load(infile)
infile.close()
print file_data # ['a', 'b', 'c']

#### If there's more than one pickled object in a data file, the load() method will only read these objects one at a time
##### The first call will get the first object, the next call will get the second, and so on
### Pickling is a handy way of converting data to bytes, and cramming them into an external data file
## Shelf
### A SHELF if a database-like object that can efficiently store pickled values
### Shelves are external data files like Python's dictionaries, except for two things.
#### Shelves are required to have their keys be strings
#### Shelves are required to have their values be objects that can be pickled
### To use a shelf:
#### First, you must import 'shelve'
#### You can open the shelf file with open() (with the name of the file as the first arg and a flag to tell the computer how the file should be opened as the second; Like normal)
##### The flags for shelves (used in open())are different-ish.
##### 'r' and 'w' work the same way
##### The third flag is 'c', which allows you to open the self for reading AND writing. Will also create a new file if one doesn't exist.
##### The last flag, 'n', will create a new, empty file no matter what
### Example

import shelve
db_file = shelve.open('letters.txt', 'c')
db_file['vowels'] = ['a', 'e', 'i', 'o', 'u']
db_file['end'] = ['x', 'y', 'z']
db_file.close()

#### Opens the file 'letters.txt' and writes two different records: 'vowels' and 'end'
### Many other dictionary operations, like has_key() and keys(), can be used with shelves
### The 'del' keyword also works with shelves, to remove records from files
#### Big Example

db_file = shelve.open('letters.txt', 'c')
print db_file.keys() # ['vowels', 'end']
print db_file.has_key('vowels') # 1
del db_file ['vowels']
print db_file.has_key('vowels') #0
db_file.close()

### sync()
#### sync() is a shelf method that writes data to files immediately. Remember, files normally don't do this because file operations are time-consuming.

#Final Note: Dictionaries, files, and shelves are typically used together for large data storage
