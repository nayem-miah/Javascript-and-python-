# ---------------If, elif, else condition---------------------------------


# a = 50
# b = 50

# if a > b:

#     print('A is greater than B')

# elif b > a:
#     print('B is greater than A')

# else:
#     print('A and B is equal')


# --------------------logical oparator------------------------------------------


# there are 3 logical oparator (and,  or, not)
# they have no sign in python we can write or, and , not directly

# a = 20
# b = 30
# c = 50

# if a < b and b > c:
#     print('In and oparator both are must true')
# else:
#     print('both are not true')


# if a < b or b > c:
#     print('In or oparator atlest one condition is must true')
# else:
#     print('both are false')


# check = not(a > b)
# print(check)


# -------------Python Identity Operators--------------------------------------

# 2 Identity oparator in python (  is , is not )


# ------------------python  tuple, dictionary, list, arrey---------------------------

# thistuple = ("apple", "banana", "cherry")  # this is a tuple

# print(type(thistuple))


# simple_dictionary = {  # this is a dictionary
#     "fruit": "banana",
#     "fish": "Hilsa",
# }

# print(type(simple_dictionary))


# simple_list = ["apple", "banana", "cherry"]  # this is a list

# print(type(simple_list))

# simple_arrey = ["apple", "banana", "cherry"]  # this is a arrery

# print(type(simple_arrey))

# to know the diffrence between arrey and list = https://www.geeksforgeeks.org/difference-between-list-and-array-in-python/ 



#------------------------------list comprehension------------------------------

# x = 5
# y = 5

# data = [[a,k] for a in range(x) for k in range(y) if a == 4]
# # here x is first loop and y is second one
# # at first loop works when a = 4 then code execute 
# print(data)

# #---------------------------lambda function----------------
# g=lambda i :i *10
# print(g(6))

# numbers = list(map(lambda i: i*10, [i for i in range(1, 6)]))
 
# print(numbers)



x = int(input())
y = int(input())
z = int(input())
n = int(input())
  
ans = [[i,j,k] for i in range(x) for j in range(y) for k in range(z)]
print(ans)