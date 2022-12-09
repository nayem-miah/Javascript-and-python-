# class Test:   # here Test is class

#     a = ''   # here a is a property
#     b = ''   

#     def hello(self):   # here hello is a method

#         print(f"Hi this is {self.a} with {self.b}.")
#         self.h()
    
#     def h(self):
#         print('H is start here')
#         # self.hello()
#         print('this is H method')

# # this is called object
# obj = Test()
# obj.a = 'Norol Islam'
# obj.b = 'Nayem Islam'
# obj.hello()


# #this is called object 
# obj2 = Test()
# obj2.a = 'Rohol Amin'
# obj2.b = 'Rasel Ahmed'
# obj2.hello()



# class Student:

#     def __init__(self, name, roll, gpa):

#         self.nam = name
#         self.rol = roll
#         self.gp = gpa

#     def hello(self):

#         print(self.nam)
#         print(self.rol)
#         print(self.gp)


# test = Student('Nayem Islam', 19112042, 3.00)

# test.hello()


# -----------------------------------inheritance--------------------------------
# it means something to use a class which is already existed in other class


# class Student:

#     name = 'Rasel'
#     roll = 19112042
#     gpa = 3.00

#     def hello(self):

#         print(self.name)
#         print(self.roll)
#         print(self.gpa)


# class Rasel(Student):

#     def color(self):
#         print('Rasel loves white girls')


# ra = Rasel()
# ra.hello()
# ra.color()

# -----------------------------------super() keyword-----------------------------


# class Younos():

#     def method1(self):

#         print('This is Younus')


# class Norul(Younos):

#     def method2(self):

#         print('this is Norul Islam')


# class Nayem(Norul):

#     def method3(self):
#         super().method1()
#         super().method2()
#         print('This is Nayem Islam')


# nayem = Nayem()
# nayem.method3()



