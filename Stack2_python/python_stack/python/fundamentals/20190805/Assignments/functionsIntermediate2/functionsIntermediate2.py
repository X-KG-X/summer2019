# 1. Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
for row_index in range(len(x)) :
	for item_index in range(len(x[row_index])) :
		if x[row_index][item_index] == 10 :
			x[row_index][item_index] = 15
print (x)

# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name'] = 'Bryant'
print (students)

# In the sports_directory, change 'Messi' to 'Andres'
for i, soccer_player in enumerate(sports_directory['soccer']) :
	if (sports_directory['soccer'][i] == 'Messi') :
		sports_directory['soccer'][i] = 'Andres'
print (sports_directory)

# Change the value 20 in z to 30
for key, value in z[0].items() :
	if z[0][key] == 20 :
		z[0][key] = 30
print (z)




#2. Iterate Through a List of Dictionaries
def iterateDictionary(d) :
	for row in d:
		item_str_list = [];
		for key, value in row.items() :
			# itemStr += f"{key} - {value}"
			item_str_list.append(f"{key} : {value}")
			# print (key, '-', value, end='')
		# print()
		# print (itemStr)
		print (", ".join(item_str_list))
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
iterateDictionary(students) 
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

#3. Get Values From a List of Dictionaries
def iterateDictionary2(key_name, d) :
	for item in d :
		try :
			print (item[key_name])
		except :
			raise Exception ("key_name does not exist")

iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students) 
iterateDictionary2('last_name2', students) 

# 4. Iterate Through a Dictionary with List Values
# Create a function printInfo(some_dict) that given a dictionary whose values 
# are all lists, prints the name of each key along with the size of its list, 
# and then prints the associated values within each key's list. For example:

def printInfo(some_dict) :
	for key in some_dict :
		print (len(some_dict[key]), key.upper())

		for item in some_dict[key] :
			print (item)

		print ()

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
















