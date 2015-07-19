words = {}
value = raw_input("Please enter a word (or -999 to quit): ")
while (value != '-999'):
   if words.has_key(value):
      words [value] = words [value] + 1
   else:
       words [value] = 1

   value = raw_input("Please enter a word (or -999 to quit): ")
for current_key in words.keys():
   print current_key, '\t', words [current_key] 
