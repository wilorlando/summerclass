#LESSON NINE PYTHON NOTES
#REMOVING FREEWARE SOMEONE ELSE INSTALLED EDITION

#Dictionaries
## A form of data storage (like lists and tuples)
## UNLIKE lists/tuples, dictionaries are unordered. The values aren't associated with an index. Instead, they're associated with a key.
### Key
#### Special and unique value associated with each record in a dictionary
#### We'll talk about each entry as a KEY-VALUE PAIR
#### Some other languages call these 'hashes' or 'associative arrays'
#### A dictionary can't have duplicate keys (So, 'Jan' cannot be the key for both '30' and 'First' in the same dictionary, for example)
## Example

my_dictionary = {}

### As you can see, dictionaries are marked by {curly braces} instead of parens (lists) or brackets [tuples]
## Example 2

days_in_month = {'Jan' : 31}

### This creates a dictionary named 'days_in_month' that contains one item, 31, whose key is 'Jan'
### Remember: The key always comes first
### The key doesn't have to be a string; It can be a number. You can even have both kinds of key (number/string) in the same dictionary.
## Example 3

print days_in_month['Jan']

### Prints the value stored with the key 'Jan' (31)
## Example 4

days_in_month = {'Jan':31, 'Feb':28, 'Mar':31}

### Multiple entries! Woo.
### When you're doing this with longer strings/values, by the way, it's better to split the pairs up so there's one per line. Increases readability.

days_in_month = {'Jan':31,
                 'Feb':28,
                 'Mar':31}

### Neat.
## Example 5

print days_in_month

### This one will print all entries in the dictionary.
### Remember, though, dictionaries are unordered lists. They'll be printed in a different order than you entered them.
## RETROACTIVE EXAMPLE 6
### When you want to add (append) to an EXISTING dictionary, do this:

my_dict['Dec'] = 31

#More Dictionary Features
## keys()
### Method to print all the keys in a dictionary
### Example

print days_in_month.keys() # ['Jan', 'Mar', 'Feb']

## values()
### Method to print all the values in a dictionary
### Example

print days_in_month.values() # [31, 31, 28]

## items()
### Returns a list of key-value tuples
### Example

print days_in_months.items() # [('Jan', 31), ('Mar', 31), ('Feb', 28)]

##KeyError
### Error message you get when attempting to access an item with a key that isn't present in the dictionary
### Can be avoided by testing to see if a key is in the dictionary before attemping to access it. There are two ways to do it
#### The 'has_key()' method, which returns a boolean value.

days_in_month.has_key(31) # False

#### ...Or you could list the key, the keyword 'in', and the dictionary name.

'Feb' in days_in_month # True

#Adding Values to Dictionaries
## Add a value to a dictionary by listing the dictionary name, the key inside square brackets, an equals sign, and the value you want stored
### Example

days_in_month['Apr'] = 20

## You can change an existing key-value pair in the same way.

days_in_month['Apr'] = 30

## You can merge two dictionaries with the 'update()' method.
## Example

days_in_summer = {'May':31, 'Jun':30, 'Jul':31}
days_in_month.update(days_in_summer)

### A 'print days_in_month.keys()' would return the following: ['Jan', 'May', 'Mar', 'Feb', 'Apr', 'Jun', 'Jul']
## The 'del' keyword can remove an item from a dictionary
### Example

del days_in_month['Apr']

## The 'clear()' method will remove ALL items from a dictionary, leaving you with an empty dictionary variable
### Example

odds = {1:'one', 3:'three', 5:'five'}
odds.clear()
print odds # {}

#### If you were to do the same thing with del, you'd remove the dictionary entirely.
##### Example

evens = {2:'two', 4:'four', 6:'six'}
del evens
print evens # Traceback (most recent call last):
            # File "", line 1, in
            # print evens
            # NameError: name 'evens' not defined

## The 'get()' method is VERY important. You can print items in a dictionary, like normal, but you'll get 'None' from a nonexistant key instead of the whole KeyError thing
### Example

print days_in_month.get('Fibbleflabble') # None

### get() also lets you provide a default value to display in place of None, should the key not be present.
#### Example

print days_in_month.get('Fibbleflabble', 'Thats not a month, you idiot.') # Thats not a month, you idiot.

#Dictionary Examples
## Example 1 (word_counter.py)

words = {}
value = raw_input("Please enter a word (or -999 to quit): ")
while (value != '-999'):
    if words.has_key(value):
        words[value] = words[value] + 1
    else:
        words[value] = 1

    value = raw_input("Please enter a word (or -999 to quit): ")

for current_key in words.key():
    print current_key, '\t', words[current_key]

### This program prompts the user for words, and keeps track of the number of times a word is entered
### The results are printed, for all intents and purposes, at random
## Example 2 (word_counter_alphabetical.py)

words = {}
value = raw_input("Please enter a word (or -999 to quit): ")
while (value != '-999'):
    if words.has_key(value):
        words[value] = words[value] + 1
    else:
        words[value] = 1

    value = raw_input("Please enter a word (or -999 to quit): ")

my_keys = words.keys()
my_keys.sort()
for current_key in my_keys:
   print current_key, '\t', words [current_key]

### Same as Example 1, but it sorts the results alphabetically by replacing the for loop at the end.
## Example 3 (word_counter_numerical.py)

words = {}
value = raw_input("Please enter a word (or -999 to quit): ")
while (value != '-999'):
    if words.has_key(value):
        words[value] = words[value] + 1
    else:
        words[value] = 1

    value = raw_input("Please enter a word (or -999 to quit): ")

temp_list = [] 
  # Select a key in the dictionary
for current_key in words.keys():
   # determine the number of words in the sorted list
   list_length = len(temp_list)
   # start looking at position 0
   placeholder = 0

   # As long as there are still items in the list
   while placeholder < list_length:

       # Get the word in the sorted list
       list_key = temp_list [placeholder]

       # Determine if this word has been entered
       # more times than the current word
       if words [list_key] > words [current_key] :
           break

       # It wasn't, so let's look at the next word
       # in the sorted list
       placeholder = placeholder + 1

   # We found the location in the sorted list for
   # this word, insert it 
   temp_list.insert(placeholder, current_key)

for current_key in temp_list:
   print current_key, '\t', words [current_key] 

### Same as Example 1, but sorts the results by number of times counted
