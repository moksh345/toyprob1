from lru import lru
class test:
    def __init__(self):
        pass
    def cases(self):
        a=lru(3)
        a.put("moksh")
        assert a.get("moksh") == "Hello moksh","Testcase failed"
        print("Testcase1 Passed")
        a.put("reetu")
        assert a.get("reetu") == "Hello reetu","Testcase failed"
        print("Testcase1 Passed")
        a.put("teja")
        assert a.get("teja") == "Hello teja","Testcase failed"
        print("Testcase1 Passed")
        a.put("suraj")
        assert a.get("suraj") == "Hello suraj","Testcase failed"
        print("Testcase1 Passed")
        a.put("dipika")
        assert a.get("moksh") == None ,"Failed"
        print("All test cases passed")
        lists = a.getcache()
        for i in lists:
            print(i)

if __name__  == "__main__":
    # a = Testcases()
    x=test()
    x.cases()



        
 
