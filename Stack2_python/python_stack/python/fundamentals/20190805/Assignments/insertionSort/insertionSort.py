# insertionSort
def insertionSort(arr) :
    for i in range(1, len(arr)) :
        print ('[iteration]:',i)
        curVal = arr[i]
#         print (curVal)
        while ((curVal < arr[i-1]) and (i-1 >= 0)) :
            print ("swap : ", curVal, arr[i-1])
            arr[i-1], arr[i] = curVal, arr[i-1]
            i -= 1
    return (arr)

print (insertionSort([4,3,2,7,1]))