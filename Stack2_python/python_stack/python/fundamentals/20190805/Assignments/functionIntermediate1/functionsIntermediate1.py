import random
def randInt(min=0, max=100) :
	if (min > max) :
		raise Exception("input error :min should be less than max")
	num = min + random.random() * (max - min) 
	return (int(num))

print (randInt(0,100))
print (randInt(10,20))
print (randInt(max=30))
print (randInt(min=90))
print (randInt(10,10))
print (randInt(10,3))

