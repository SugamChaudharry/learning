for i in range(1, 101):
    if i % 2 != 0:
        print(i)
print("-------------------------------------")
for i in range(1, 101):
    if i % 2 == 0:
        print(i)
print("-------------------------------------")
t = 0
for i in range(1, 11):
    t = t + 12
    print(t)
print("-------------------------------------")
for i in range(0, 101):
    print(100 - i)
print("-------------------------------------")
num = int(input("enter a num"))
t = 0
for i in range(1, 11):
    t = t + num
    print(t)
print("-------------------------------------")
num = int(input("enter a num"))
t = 1
for i in range(1, num + 1):
    t = t * i
print(t)
print("-------------------------------------")
num = int(input("enter a num"))
t = 0
for i in range(1, num + 1):
    t = t + i
print(t)
print("-------------------------------------")
for i in range(1, 101):
    if i % 3 == 0:
        print("buzz")
    elif i % 5 == 0:
        print("fuzz")
    if i % 3 == 0 and i % 5 == 0:
        print("sugam")
print("-------------------------------------")
