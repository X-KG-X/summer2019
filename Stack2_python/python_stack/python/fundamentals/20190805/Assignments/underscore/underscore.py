class Underscore:
    def map(self, iterable, callback) :
        for i in range(len(iterable)) :
            iterable[i] = callback(iterable[i])
        return (iterable)

    def find(self, iterable, callback) :
#         res = []
        for i in range(len(iterable)) :
            if (callback(iterable[i])) :
#                 res.append(iterable[i])
                return (iterable[i])
        return (null)

    def filter(self, iterable, callback) :
        res = []
        for i in iterable :
            if (callback(i)) :
                res.append(i)
        return (res)

    def reject(self, iterable, callback) : 
        res = []
        for i in iterable :
            if not callback(i) :
                res.append(i)
        return (res)

 _ = Underscore()
_.map([1,2,3], lambda x : x*3)
_.find([1,2,3,4,5,6], lambda x: x>4)
_.filter([1,2,3,4,5,6], lambda x: x%2==0)
_.reject([1,2,3,4,5,6], lambda x: x%2==0)