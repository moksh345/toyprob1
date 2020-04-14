class lru:
    def __init__(self,size):
        self.size=size
        self.lru=[]
        self.cache={}
    def put(self,key):
        if len(self.lru) < self.capacity:
            if key in self.lru:
                self.lru.remove(key)
                self.lru.append(key)  
                self.cache[key]  = "Hello"+str(key)
            else:
                self.lru.append(key)
                self.cache[key] = "Hello"+str(key)
        else:
            
            r = self.lru.pop(0)
            del self.cache[r]
            self.lru.append(key)
            self.cache[key] = "Hello"+ str(key)

    def get(self,key):
        pass
    def getcache(self):
        pass