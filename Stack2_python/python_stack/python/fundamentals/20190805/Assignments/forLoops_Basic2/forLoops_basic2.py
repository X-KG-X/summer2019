# 1. Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
def biggie_size(l) :
	for i in range(len(l)) :
		if (l[i] > 0) :
			l[i] = "big"
	return (l)

biggie_size([-1, 3, 5, -5])


# 2. Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
def count_positives(l) :
	if (len(l) < 1) :
		raise Exception("list should have at least one element")
	cntPos = 0
	for i in range(len(l)) :
		if (l[i] > 0) :
			cntPos += 1;
	l[len(l)-1] = cntPos
	return (l)

print(count_positives([-1,1,1,1]))
print(count_positives([1,6,-4,-2,-7,2]))

# S3. sum Total - Create a function that takes a list and returns the sum of all the values in the array.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7
def sum_total(l) :
	return (sum(l))
print (sum_total([1,2,3,4]))
print (sum_total([6,3,-2]))


# 4. Average - Create a function that takes a list and returns the average of all the values.
# Example: average([1,2,3,4]) should return 2.5
def average(l) :
	if (len(l) < 1) :
		raise Exception("no item!")
	totalSum = 0;
	for x in l :
		totalSum += x
	return (totalSum / len(l))

print (average([1,2,3,4]))

# 5. Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0
def getLength(l) :
	return (len(l))
print (getLength([37,2,1,-9]))
print (getLength([]))

# 6. Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False
def minimum(l) :
	if (len(l) == 0) :
		return False
	curMin = l[0];
	for x in l :
		if (x < curMin) :
			curMin = x
	return (curMin)

print (minimum([37,2,1,-9]))
print (minimum([]))


# 7. Maximum - Create a function that takes a list and returns the maximum value in the array. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False
def maximum(l) :
	if (len(l) == 0) :
		return False
	curMax = l[0];
	for x in l :
		if (x > curMax) :
			curMax = x
	return (curMax)

print (maximum([37,2,1,-9]))
print (maximum([]))

# 8. Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }
def ultimate_analysis(l) :
	if (len(l) == 0) :
		return False
	totalSum, average = 0, 0
	minimum, maximum = l[0], l[0]

	for x in l :
		if (x > maximum) :
			maximum = x
		elif (x < minimum) :
			minimum = x
		totalSum += x

	return {'sumTotal':totalSum, 'average':totalSum/len(l),
			'minimum':minimum, 'maximum':maximum, 'length':len(l)}

ultimate_analysis([37,2,1,-9])

# 9. Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]
def reverse_list(l) :
	n = len(l)
	for i in range(int(n/2)) :
		temp = l[n-(i+1)]
		l[n-(i+1)] = l[i]
		l[i] = temp
	return (l)

reverse_list([37,2,1,-9])
























