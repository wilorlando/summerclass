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
