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



# list1 = [57,57, 57]
# mx = max(list1)
# sc = None

# for num in list1:
#     if num == mx:
#             pass
#     elif sc == None:
#             sc = num
#     elif num > sc:
#             sc = num
# print(sc)



    
# query_name = input()
# student_marks = {
#     'Krishna': [67, 68, 69],
#     'Arjun': [70, 98, 63],
#     'Malika': [52, 56, 60]
# }

# sum = 0
# for i in student_marks[query_name]:
#     sum = sum + i
    
# f = sum/3
# print("{:0.2f}".format(f))



# query_name = input()
# sonuc = 0
# student_marks = {
#         "Nayem": [45,55,78],
#         "Shakib": [55,65,34],
# }

# for i in student_marks[query_name]:
#         sonuc+=i

# average = sonuc / len(student_marks[query_name])
# print("%.2f" %average)

# list1 = [
    
#     [48,32,65,34],
#     [53,65,67,43],
#     [54,65,76,34]
# ]

# print(list1[0][0])



# li = []
# for i in range(5):
#     li.append([])
#     for j in range(5):
#         li[i].append(j)
# print(li)

# li = [34,22,12,34,6,43,4,3,3,4]
# mins = min(li)
# scl = None
# for i in li:
#     if mins == i:
#         pass
#     elif scl == None:
#         scl = i
#     elif i<scl:
#         scl = i
# print(scl)
    
# if __name__ == '__main__':
#     scores = []
#     for _ in range(int(input())):
#         name = input()
#         score = float(input()) 
#         scores.append([name, score])
# scores = [['nayem',45],['tamim',56],['sabbir',65],['saiful',9]]
    
#     # Find min score
# min_score = min(scores, key = lambda x: x[1])
# print(min_score)
    
#     # Keep only students with score higher than min
# scores = [score for score in scores if score[1] > min_score[1]]
    
#     # Find second min score
# second_min_score = min(scores, key = lambda x: x[1])
    
#     # Keep only students with second min score
# scores = [score for score in scores if score[1] == second_min_score[1]]
    
#     # Sort students alphabetically
# scores.sort(key = lambda x: x[0])
    
# for score in scores:
#         print(score[0])

scores = [['nayem',45.56],['tamim',56.64],['sabbir',65.07],['saiful',9.87],['omar',14.54],['saiful',14.54]]
mini = min(scores, key=lambda y : y[1])
scm = None
for i in scores:
    if mini[1] == i[1]:
        pass
    elif scm == None:
        scm = i
    elif scm[1]> i[1]:
        scm = i

 
print(scm)