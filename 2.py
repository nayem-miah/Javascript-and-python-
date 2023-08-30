# # we covered here

# 1/If, elif, else condition
# 2/logical oparator
# 3/Python Identity Operators
# 4/python  tuple, dictionary, list, arrey
# 5/list comprehension
# 6/lambda function


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



list1 = [2,3,6,6,5,8,-2,87]
lenth = len(list1)
for i in range(lenth):
    min_num = i
    for j in range(i+1,lenth):
      if list1[j]>list1[min_num]:
        min_num = j
    (list1[min_num],list1[i]) = (list1[i],list1[min_num])
    
print(list1[min_num])
print(list1)





